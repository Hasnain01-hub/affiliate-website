import "./App.css";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Home from "./Components/Home";

function App() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Header />
        <div className="layout-page">
          <Nav />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
