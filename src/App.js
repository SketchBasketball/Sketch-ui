import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Schedule from './pages/Schedule';
import League from './pages/League';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/schedules" component={Schedule} exact={true} />
        <Route path="/leagues" component={League} />
      </Switch>
    </div>
  );
}

export default App;
