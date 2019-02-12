import React from "react";
import factory from "../ethereum/factory.js";
import { Card } from 'semantic-ui-react';
import Layout from '../component/Layout';

// factory: 0x536d2ABac689F9111140C20567eD75293058D8d8
// donation [0x2c1A1E40c84aeAc83Eb0d8fC341D517569bc509e,0xaB5a52Aa77eDfc2C698a7059A5833B9fD457Acf8,0xB7e6B1C36565cf1691DfED8d9e5443D09Bd70B37,0xA8DeA73C0C1EF45F729bf10bfC4d4f64975c7993
//          ]

class AllDonations extends React.Component {
  static async getInitialProps(props) {
    const donations = await factory.methods.getDeployedDonations().call();
    return { donations };
  }

  donationsList(){
    const items = this.props.donations.map( (donation, id) => {

      return {
        image: `/Users/eunjisong/Documents/project/donation-in-chain/backend/public/${id}.png`,
        header: "here",
        description: donation,
        fluid: true
      }
    })
    return <Card.Group items={items}/>
  }

  render() {
    const { donations } = this.props;
    console.log(donations);
    return (
      <Layout >
      <div>
          {this.donationsList()}
      </div>
      </Layout>
    );
  }
}

export default AllDonations;
