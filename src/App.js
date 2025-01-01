import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Changed to Routes

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messsage, type) => {
    setAlert({
      msg: messsage,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(2 21 36 )";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* Updated to Routes and element prop */}
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route */}
        {/* exact
              path="/"
              element={ */}
        <TextForm
          heading="Enter your text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
