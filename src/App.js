import Form from "./components/Form";
// import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title1="Home" title2="About Us" title3="Contact Us" />

      <div className="container my-3">
        <Form heading="Text Analyzer" />
      </div>

      {/* <div className="container my-5">
        <About title1="Developer " title2="About Page" />
      </div> */}
    </>
  );
}

export default App;
