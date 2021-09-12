import './MenuItem.scss';
import { NavLink } from 'react-router-dom';

function MenuItem(props) {
    return (
        <NavLink className="menu-item"
            exact to={`/${props.path}`}
            activeStyle={{
                color: "#FF5722"
            }}
            >
            {props.title}
        </NavLink>
    )
}

export default MenuItem;