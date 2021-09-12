import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Schedule from './pages/Schedule';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/schedule" component={Schedule} exact={true} />
      </Switch>
    </div>
  );
}

export default App;
