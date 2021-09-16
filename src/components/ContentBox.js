import { Link } from 'react-router-dom';
import './ContentBox.scss';

const ContentBox = (props) => {
    return (
        <div className="content">
            <div className="content-header">
              <span className="title">{props.title}</span>
              {props.path ? <Link className="more" to={props.path}>more{' >'}</Link> : null}
            </div>
            {props.children}
          </div>
    )
}

export default ContentBox;