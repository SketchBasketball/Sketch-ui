import "./LeagueMenuItem.scss"
import { NavLink } from 'react-router-dom';

const LeagueMenuItem = (props) => {
    return (
        <NavLink
            className="league-menu-link"
            exact={false}
            to={props.path}
            activeStyle={{
                color: "#FF5722",
                border: "#FF5722 solid 1px"
            }
        }>
            {props.name}
        </NavLink>
    )
}

export default LeagueMenuItem;