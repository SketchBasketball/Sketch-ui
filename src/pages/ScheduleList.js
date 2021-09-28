import "./ScheduleList.scss";
// import ContentBox from "../components/ContentBox";

const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ScheduleList = () => {
  return (
    <div className="schedule-list-wrapper">
      <div className="schedule-bav-bar">
        <span>{"< Prev"}</span>
        <span>Schedule</span>
        <span>{"Next >"}</span>
      </div>
      <div className="schedule-list-grid">
        {temp.map((item) => {
          return (
            <div className="match-box" key={item}>
              <div className="match-box-header">
                <span className="match-box-header-item">2021-09-20</span>
                <span className="match-box-header-item">THU</span>
              </div>
              <div className="match-box-detail-wrapper">
                <div className="match-box-detail-header">Men's League</div>
                <div className="match-box-detail">
                  <div>
                    <div className="temp-icon-a"></div>
                    <div className="team-title">Team A</div>
                  </div>
                  <div className="score-wrapper">
                    <span>23 : 7</span>
                  </div>
                  <div>
                    <div className="temp-icon-b"></div>
                    <div className="team-title">Team B</div>
                  </div>
                </div>
                <div className="match-box-venue-time">
                  <span>Kennedy Town Sports Centre @ 7:00 PM</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleList;
