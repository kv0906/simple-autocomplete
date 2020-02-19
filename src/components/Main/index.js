import React, { useContext } from "react";
import Header from "../../components/common/Header";
import Autocomplete from "../../components/Autocomplete";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./styles.scss";

const suggestions = ["Hà Tĩnh", "Hà nội", "Hồ Chí Minh", "Hội An"];
function Main() {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? " darkmode" : "";
  return (
    <div className="App">
    {!lightTheme ? <div className="overlay"></div> : null}
      <Header />
      <div className={`App-main` + (theme)}>
        <Autocomplete lightTheme={lightTheme} suggestions={suggestions} />
      </div>
    </div>
  );
}

export default Main;
