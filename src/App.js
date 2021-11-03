import Form from "./components/Form";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [textcolor, settextcolor] = useState("dark");
  const [alert, setalert] = useState(null);

  const setAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

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

      <Alert alert="This is custom alert" />

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
