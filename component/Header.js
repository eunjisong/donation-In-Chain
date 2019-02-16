import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import {Link} from '../routes'

export default class Header extends React.Component {
  state = { activeItem: "DonationInChain" };

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name });

  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu pointing secondary style={{ marginTop: "30px"}}>

        <Menu.Item
          href="/"
          name="DonationInChain"
          active={activeItem === "DonationInChain"}
          onClick={this.handleClick}
        >
            Donation In Chain
        </Menu.Item>

        <Menu.Item
          href="/donations/inprocess"
          name="InProcess"
          active={activeItem === "InProcess"}
          onClick={this.handleClick}
        >
            In Process
        </Menu.Item>

        <Menu.Item
          href="/donations/completed"
          name="completed"
          active={activeItem === "completed"}
          onClick={this.handleClick}
        >
            Completed
        </Menu.Item>

        <Menu.Menu position="right">
        <Menu.Item
          name="MyPage"
          href="/mypage"
          active={activeItem === "MyPage"}
          onClick={this.handleClick}
        >

          My Page

        </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
