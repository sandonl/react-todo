import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Todos from './Todos';
import Todo from './Todo';


// Have all routing information in here 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Todos/>} /> 
          <Route path="/todo/:id" children={<Todo/>} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
