import "./ScheduleList.scss";
import ContentBox from "../components/ContentBox";
import { useParams } from "react-router-dom";

const ScheduleList = () => {
  const { league } = useParams();

  return (
    <div className="schedule-list-wrapper">
      <ContentBox title={`Schedules - ${league}`}>
        <div className="schedule-list-grid">
          <ContentBox title="2021-09-20">
            <h3>League</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-09-23">
            <h3>League</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-09-25">
            <h3>League</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-09-27">
            <h3>Play Off</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-09-29">
            <h3>Play Off</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-10-01">
            <h3>Play Off</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-10-03">
            <h3>Play Off</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-10-05">
            <h3>Semi-Final</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-10-07">
            <h3>Semi-Final</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
          <ContentBox title="2021-10-11">
            <h3>Finals</h3>
            <h3>Team A VS Team B</h3>
          </ContentBox>
        </div>
      </ContentBox>
    </div>
  );
};

export default ScheduleList;
