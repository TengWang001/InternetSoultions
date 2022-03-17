import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Appnav from "./Components/nav";
import Appfooter from "./Components/footer";
import Login from "./Components/Loginpage/loginFrontend.js";

function App() {
  return (
    <div className="App">
      <Appnav></Appnav>
      <Login/>
      <Appfooter></Appfooter>
    </div>
  );
}

export default App;
