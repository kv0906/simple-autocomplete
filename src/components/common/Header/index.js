import React from "react";
import logo from "../../../assets/airbnb.png";
import ToggleTheme from "../../common/ToggleTheme";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./styles.scss";
function Header() {
  return (
    <ThemeContext.Consumer>
      {context => {
        const theme = !context.lightTheme ? " darkmode" : "";
        return (
          <header className={`App-header` + theme}>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-header__wrapper">
              <div>
                <ToggleTheme />
              </div>
              <div className="App-nav">
                <a href="">Become a host</a>
                <a href="">Help</a>
                <a href="">Sign up</a>
                <a href="">Login</a>
              </div>
            </div>
          </header>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default Header;
