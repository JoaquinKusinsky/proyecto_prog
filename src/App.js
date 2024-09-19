import Home from "./screens/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favoritos from "./screens/Favoritos";
import Populares from "./screens/Populares";
import Cartel from "./screens/Cartel";
import NotFound from "./screens/NotFound";
import Detalle from "./components/Detalle";
//import Busqueda from "./components/Busqueda";

function App(props){
  return (
    <>
    <Header/>
    <Switch>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/favoritos" component={Favoritos}/>
    <Route path="/populares" component={Populares}/>
    <Route path="/detalle/:id" component={Detalle}/>
    <Route path="/cartel" component={Cartel}/>
    <Route path="" component={NotFound}/>
    </Switch>
    <Footer/>
    </>
  )
}

export default App;
