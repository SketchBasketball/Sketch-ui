import { Link } from 'react-router-dom';
import './MainContent.scss';

const MainContent = (props) => {
    return (
        <div className="content">
            <div className="content-header">
              <span className="title">{props.title}</span>
              <Link className="more" to={props.path}>more{' >'}</Link>
            </div>
            
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
            <h3>Home~~~</h3>
          </div>
    )
}

export default MainContent;