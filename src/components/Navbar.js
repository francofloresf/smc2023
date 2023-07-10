import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-simcor.png"
import { MenuItems } from "./MenuItems";


class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  } 

  render(){
    return(
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <Link to="/">
              <img src={logo} alt="Logo Simcor"/>
           </Link>
        </div>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ?
        "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
                <a
                  className={item.cNamee}
                  href={item.linkk}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={item.iconn}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;

