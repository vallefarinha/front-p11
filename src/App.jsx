import RouterComponent from "./configuration/RouterComponent.jsx";
import FooterComponent from "./components/footer-component/FooterComponent.jsx";
import "./App.css";
import NavbarComponent from "./components/navbar-component/NavbarComponent.jsx";
import { BrowserRouter as Router} from "react-router-dom";


const App = () => {
  return (
    <Router> 
    <div className="flex flex-col min-h-screen">
    <NavbarComponent/> 
      <div className="flex-grow">
        <RouterComponent />
      </div>
      <FooterComponent />
    </div>
  </Router>
  );
};

export default App;
