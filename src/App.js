import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title1="Home" title2="About Us" title3="Contact Us" />
      <div className="container my-3">
        <Form heading="Text Analyzer" />
      </div>
    </>
  );
}

export default App;
