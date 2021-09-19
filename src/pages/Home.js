import "./Home.scss";
import ContentBox from "../components/ContentBox";
import mainTitlesAndRoutes from "../const/mainTitlesAndRoutes";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="content-wrapper">
        {mainTitlesAndRoutes.map((item, index) => {
          return (
            <ContentBox key={index} title={item.title} path={item.path}>
              <div>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
                <h3>Home~~~</h3>
              </div>
            </ContentBox>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
