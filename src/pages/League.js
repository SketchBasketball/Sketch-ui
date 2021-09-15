import './League.scss';
import LeagueMenuItem from '../components/LeagueMenuItem';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const League = () => {
    return (
        <div className="league-wrapper">
            <div className="league-menu-wrapper">
                <LeagueMenuItem name="Summary" path="/Leagues" exact={true} />
                <LeagueMenuItem name="Men's League" path="/Leagues/Men"/>
                <LeagueMenuItem name="Women's League" path="/Leagues/Women"/>
                <LeagueMenuItem name="Kid's League" path="/Leagues/Men1"/>
                <LeagueMenuItem name="U18 League" path="/Leagues/Men2"/>
                <LeagueMenuItem name="U15 League" path="/Leagues/Men3"/>
                <LeagueMenuItem name="U12 League" path="/Leagues/Men4"/>
                <LeagueMenuItem name="U9 League" path="/Leagues/Men5"/>
                <LeagueMenuItem name="U7 League" path="/Leagues/Men6"/>
            </div>
            <Switch>
                <Route path="/Leagues" component={Home} exact={true} />
                <Route path="/Leagues/Men" component={Home} exact={true} />
                <Route path="/Leagues/Women" component={Home} exact={true} />
                <Route path="/Leagues/Men1" component={Home} exact={true} />
                <Route path="/Leagues/Men2" component={Home} exact={true} />
                <Route path="/Leagues/Men3" component={Home} exact={true} />
                <Route path="/Leagues/Men4" component={Home} exact={true} />
            </Switch>
        </div>
    )
}

export default League;