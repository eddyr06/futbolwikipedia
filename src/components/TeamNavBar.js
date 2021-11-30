import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

const TeamNavBar = (props) => {
  const [leaguesArr, setLeaguesArr] = React.useState([]);
  let history = useHistory();

  const redirect = (teamPage) => {
    // history.push(`/LeagueDetails/${teamPage}`);
    history.push(`/SeasonDetails/${teamPage}`);
  };

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues/")
      .then((info) => {
        setLeaguesArr(info.data.data);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <h5 style={{ color: "white" }}>{props.text}</h5>
        <label for="team-name"></label>
        {/* <select onChange={redirect} id="team-name"> */}
        <select
          onChange={(e) => {
            redirect(e.target.value);
          }}
          id="team-name"
        >
          <option value="">Select a Team</option>
          {leaguesArr.map((league) => {
            return <option value={league.id}>{league.name}</option>;
          })}
        </select>
      </div>
    </nav>
  );
};

export default TeamNavBar;
