import './League.scss';
import LeagueMenuItem from '../components/LeagueMenuItem';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Schedule from './Schedule';

const League = () => {
    return (
        <div className="league-wrapper">
            <div className="league-menu-wrapper">
                <LeagueMenuItem name="Men's League" path="/Leagues/Men"/>
                <LeagueMenuItem name="Women's League" path="/Leagues/Women"/>
                <LeagueMenuItem name="Kid's League" path="/Leagues/Men1"/>
                <LeagueMenuItem name="U18 League" path="/Leagues/Men2"/>
                <LeagueMenuItem name="U15 League" path="/Leagues/Men3"/>
                <LeagueMenuItem name="U12 League" path="/Leagues/Men4"/>
            </div>
            <h3>League Page</h3>
            <h3>League Page</h3>
            <h3>League Page</h3>
            <h3>League Page</h3>
            League Page
            <Switch>
                <Route path="/Leagues/Men" component={Home} exact={true} />
                <Route path="/Leagues/Women" component={Schedule} exact={true} />
                {/* <Route path="/leagues" component={League} /> */}
            </Switch>
        </div>
    )
}

export default League;