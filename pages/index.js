import React from "react";
import factory from "../ethereum/factory.js";
import donation from "../ethereum/donation.js";
import { Card, Button } from "semantic-ui-react";
import Layout from "../component/Layout";
import { Link, Router } from "../routes";
import web3 from "../ethereum/web3.js";

// factory: 0x536d2ABac689F9111140C20567eD75293058D8d8
// donation [0x2c1A1E40c84aeAc83Eb0d8fC341D517569bc509e,0xaB5a52Aa77eDfc2C698a7059A5833B9fD457Acf8,0xB7e6B1C36565cf1691DfED8d9e5443D09Bd70B37,0xA8DeA73C0C1EF45F729bf10bfC4d4f64975c7993
//          ]

class AllDonations extends React.Component {
  static async getInitialProps(props) {
    const donationsAddresses = await factory.methods
      .getDeployedDonations()
      .call();

    const donationsInstances = await Promise.all(
      Array(donationsAddresses.length)
        .fill()
        .map((ele, idx) => new donation(donationsAddresses[idx]))
    );

    const instanceDetail = await Promise.all(
      Array(donationsAddresses.length)
        .fill()
        .map(async (ele, idx) => {
          return {
            detail: await donationsInstances[idx].methods.requests(0).call(),
            balance: await web3.eth.getBalance(donationsInstances[idx].options.address),
            address: donationsAddresses[idx]
          }})
    );

    return { donationsAddresses, donationsInstances, instanceDetail };
  }

  donationsList() {
    const items = this.props.instanceDetail.map((donation, id) => {
      return {
        image: `/static/${id}.png`,
        header:" donation.product,",
        description: 'div',
        fluid: true,
        onClick: () =>
          Router.pushRoute(`/donations/${donation.address}`)
      };
    });
    return <Card.Group centered itemsPerRow={3} items={items} />;
  }

  render() {
    const {
      donationsAddresses,
      donationsInstances,
      instanceDetail
    } = this.props;
    console.log(instanceDetail);
    return (
      <Layout>
        <div>
          {this.donationsList()}
          <Link route={`/donations/new`}>
            <a>
              <Button>new</Button>
            </a>
          </Link>
          <div>
            <Link route={`/donations/${donationsAddresses[0]}`}>
              <a>
                <Button>Go to one</Button>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AllDonations;
