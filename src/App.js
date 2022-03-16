import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
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
