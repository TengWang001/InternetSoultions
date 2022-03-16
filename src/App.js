import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Form } from "react-bootstrap";
import Appnav from "./Components/nav";
import Appfooter from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Appnav></Appnav>
    
      <Appfooter></Appfooter>
    </div>
  );
}

export default App;
