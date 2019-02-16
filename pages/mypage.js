import React from "react";
import { Link } from "../routes";

export default class MyPage extends React.Component {


  render() {
    return (
      <div>
        <Link route="/donations/new">
          <a>New</a>
        </Link>
      </div>
    );
  }
}
