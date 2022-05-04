import React from "react";
import "./PlayerBannerInfo.scss";
import { useSelector } from "react-redux";

const PlayerBannerInfo = () => {
	const { playerDetails } = useSelector((store) => store.playerReducer);

	return (
		<div className="player-banner-staff-container">
			<div className="player-banner-upper-container">
				<div className="player-banner-upper-box">
					<div className="player-banner-upper-container-title">
						{"GAMES PLAYED"}
					</div>
					<div className="player-banner-upper-container-value">
						{playerDetails?.gp ? playerDetails?.gp : 0}
					</div>
				</div>
				<div className="player-banner-upper-box">
					<div className="player-banner-upper-container-title">
						{"PLAYER OF THE GAME"}
					</div>
					<div className="player-banner-upper-container-value">
						{playerDetails?.potg ? playerDetails?.potg : 0}
					</div>
				</div>
			</div>
			<div className="player-banner-lower-container">
				<div className="player-banner-lower-box">
					<div className="player-banner-lower-container-title">{"AGE"}</div>
					<div className="player-banner-lower-container-value">
						{playerDetails?.age ? playerDetails?.age : "-"}
					</div>
				</div>
				<div className="player-banner-lower-box">
					<div className="player-banner-lower-container-title">{"HEIGHT"}</div>
					<div className="player-banner-lower-container-value">
						{playerDetails?.height ? playerDetails?.height + "cm" : "-"}
					</div>
				</div>
				<div className="player-banner-lower-box">
					<div className="player-banner-lower-container-title">
						{"BIRTHDATE"}
					</div>
					<div className="player-banner-lower-container-value">
						{playerDetails?.birthdate ? playerDetails?.birthdate : "-"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerBannerInfo;
