import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.scss";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className={styles.navUl}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello">Hello</Link>
          </li>
          <li>
            <Link to="/goodby">Goodby</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;
