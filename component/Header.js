import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import {Link, Router} from '../routes'


export default class Header extends React.Component {
  state = { activeItem: '' };

  handleClick = (e, { name }) => {
    if(name !== 'MyPage' || name !== 'index' ) Router.pushRoute(`/donations/${name}`)
    this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state;
    console.log(this.props)
    return (
      <Menu pointing secondary style={{ marginTop: "30px"}}>

        <Menu.Item
          href="/"
          name="index"
          active={activeItem === "index"}
          onClick={this.handleClick}
        >
            Donation In Chain
        </Menu.Item>

        <Menu.Item
          name="inprogress"
          active={activeItem === "inprogress"}
          onClick={this.handleClick}
        >
            In Progress
        </Menu.Item>

        <Menu.Item

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
