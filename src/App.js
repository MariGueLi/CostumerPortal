import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Menu from "./Menu/Menu";
import Welcome from "./Welcome/Welcome";
import './App.css';



function App() {

  return <>
    <Navigation />
    <Sidebar/>
    <Menu /> 
    <Welcome />
    <Products/>

    
    
  </>
}

export default App;
