import Form from "./components/Form";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [textcolor, settextcolor] = useState("dark");

  const toggle = () => {
    if (mode === "dark") {
      setmode("light");
      settextcolor("dark");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      settextcolor("light");
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <>
      <Navbar
        title1="Home"
        title2="About Us"
        title3="Contact Us"
        mode={mode}
        togglemode={toggle}
        textcolor={textcolor}
      />
      <div className="container my-3">
        <Form heading="Text Analyzer" mode={mode} />
      </div>

      {/* <div className="container my-5">
        <About title1="Developer " title2="About Page" />
      </div> */}
    </>
  );
}

export default App;
