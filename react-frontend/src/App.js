import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
        <Menu />
        <MenuPage />
        <Footer />
      </div>
  );
}

export default App;
