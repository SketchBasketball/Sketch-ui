import defaultHeaderMenu from "../const/defaultHeaderMenu";
import './Header.scss';
import logo from '../logo/logo.png'
import MenuItem from './MenuItem';

function Header() {
    return (
        <div className="HeaderWrapper">
            <div className="Header">
                <div className="logo-wrapper">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>
                {defaultHeaderMenu.map((item) => {
                    return <MenuItem title={item.title} path={item.path}/>
                })}
            </div>
        </div>
    )
}

export default Header;