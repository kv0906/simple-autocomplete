import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import Main from "./components/Main";
function App() {
  return (
    <ThemeContextProvider>
      <Main/>
    </ThemeContextProvider>
  );
}

export default App;
