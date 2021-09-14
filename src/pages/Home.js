import './Home.scss';
import MainContent from '../components/MainContent';
import mainTitlesAndRoutes from '../const/mainTitlesAndRoutes';

function Home() {
    return (
      <div className="home-wrapper">
        <div className="content-wrapper">
          {mainTitlesAndRoutes.map((item, index) => {
            return <MainContent key={index} title={item.title} path={item.path}/>
          })}
          {/* <MainContent title="UPCOMING SCHEDULES"/>
          <MainContent title="League Standings"/>
          <MainContent title="Leader Board"/> */}
        </div>
      </div>
    );
  }
  
  export default Home;