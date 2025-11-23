import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Index from "./pages/index";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
        <Menu />
        <Index />
        <Footer />
      </div>
  );
}

export default App;
