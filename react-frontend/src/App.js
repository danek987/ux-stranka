import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";
import ComponentsPlayground from "./pages/ComponentPlayground";

function App() {
  return (
      <div className="App">
        <Menu />
        <ComponentsPlayground />
        <MenuPage />
        <Footer />
      </div>
  );
}

export default App;
