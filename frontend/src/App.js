import './App.css';
// To toggle the SideDrawer. Every time you click on the navbar it should open.
// Set useState to false above the return.
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// Importing the Screens.
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


// Importing Components.
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
      <Router>
        {/* Navbar Here */}
        <Navbar click={() => setSideToggle(true)} />
        {/* Side here. Pass useState */}
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        {/* Backdrop here. Pass useState */}
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
          </Switch>
        </main>
    </Router>
  );
}


export default App;
