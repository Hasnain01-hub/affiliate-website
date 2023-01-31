import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState();

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    axios.get("https://amzn.eu/d/j1e8x8J", { mode: "no-cors" }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <input type="url" onChange={handleChange} />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}

export default App;
