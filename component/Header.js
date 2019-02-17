import React from "react";
import { Menu } from "semantic-ui-react";
import {Link} from '../routes'


export default class Header extends React.Component {
  state = { activeItem: '' };

  render() {


    return (
      <Menu  style={{ marginTop: "30px"}}>
        <Link to="/"><a className="item">Donation In Chain</a></Link>
        <Link to="/donations/inprogress"><a className="item">In Progress</a></Link>
        <Link to="/donations/completed"><a className="item">Complete</a></Link>
        <Menu.Menu position="right"><Link to="/mypage"><a className="item">My Page</a></Link></Menu.Menu>
      </Menu>
    );
  }
}
