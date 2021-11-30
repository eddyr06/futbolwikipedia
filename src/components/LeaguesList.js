import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const LeaguesList = () => {
  const [leaguesArr, setLeaguesArr] = React.useState([]);

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
    <div className="list-group">
      {leaguesArr.map((league) => {
        return (
          <Link
            className="list-group-item list-group-item-action league-links"
            to={{
              pathname: `/LeagueDetails/${league.id}`,
              state: {
                name: league.name,
              },
            }}
          >
            <img src={league.logos.light} alt={league.name} />
            <p>{league.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default LeaguesList;
