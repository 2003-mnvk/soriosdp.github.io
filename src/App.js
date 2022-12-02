import './App.css'

import Homepage from "./components/homepage/homepage"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Start from "./components/start/start"
import Design from "./components/design/design"
import Worktender from "./components/construction/worktender"
import Realestate from "./components/construction/realestate"
import Services from "./components/construction/services"
import Environment from "./components/construction/environment"
import View from"./components/view/view"
import Agri from "./components/agriculture/agri"
import Food from "./components/agriculture/food"
import Forest from "./components/agriculture/forest"
import Mining from "./components/material/mining"
import Cloth from "./components/material/cloth"
import Save from "./components/save/save"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/login/login'
import Register from './components/register/register'


function App() {

  <div className="App">
     
        <h3>Append a React component in another on button click</h3>
        </div>


  return (
    <div className="App">
      <Router>
        <Switch>
       
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/start" component={Start} />
          <Route path="/design" component={Design} />
          <Route path="/worktender" component={Worktender} />
          <Route path="/realestate" component={Realestate} />
          <Route path="/services" component={Services} />
          <Route path="/environment" component={Environment} />
          <Route path="/view" component={View} />
          <Route path="/agri" component={Agri} />
          <Route path="/food" component={Food} />
          <Route path="/forest" component={Forest} />
          <Route path="/mining" component={Mining} />
          <Route path="/cloth" component={Cloth} />
          <Route path="/save" component={Save} />
          
          

          
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
