import './styles/App.css';
import Equipment from './components/Equipment';
import EquipmentPiece from './components/EquipmentPiece';
import EquipmentForm from './components/EquipmentForm';
import Part from './components/Part';
import Parts from './components/Parts';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/equipment/create'>
            <EquipmentForm />
          </Route>
          <Route path='/equipment/:equipmentID'>
            <EquipmentPiece />
          </Route>
          <Route path='/equipment'>
            <Equipment />
          </Route>
          <Route path='/parts/:partID'>
            <Part />
          </Route>
          <Route path='/parts'>
            <Parts />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;