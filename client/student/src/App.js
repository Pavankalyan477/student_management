
import './App.css';
import { Switch, Route } from 'react-router-dom';
import StudentDetails from './components/StudentDetails';
import Navbar from './components/Navbar';
import ContextDetails from './components/ContextDetails';
import Admin from "./components/Admin"

function App() {
  return (
    <div className="App">
      <Switch>
    
        <Route exact path="/">
         <Navbar/> 
            <ContextDetails/>
        </Route>
        <Route exact path="/adminpage">
        <Navbar/>
        <Admin/>
        </Route>
        
      </Switch>
  
    </div>
  );
}

export default App;
