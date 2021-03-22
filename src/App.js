import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./sections/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
