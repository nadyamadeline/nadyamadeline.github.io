import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./sections/index";
import Preload from "./components/Preloader/Preload";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3100);
  }, []);

  return (
    <div>
      {loading ? (
        <Preload loading={loading} />
      ) : (
        <div className="App">
          <Navbar />
          <Sidebar />
          <Content />
        </div>
      )}
    </div>
  );
}

export default App;
