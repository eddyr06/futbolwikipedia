import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LeaguesList from "./LeaguesList";
import SearchBar from "./SearchBar";

const LeagueDetails = (props) => {
  const [leagueArr, setLeagueArr] = React.useState([]);
  const [leaguesDeets, setLeaguesDeets] = React.useState({});
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues/")
      .then((info) => {
        // console.log("this is info in league details", info);
        setLeagueArr(info.data.data);
        let name = info.data.data.find((name) => {
          return name.id === props.match.params.league;
        });
        setLeaguesDeets(name);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, [props]);

  useEffect(() => {
    const newFilter = leagueArr.filter((value) => {
      return value.name.includes(searchText);
    });
    setFilteredData(newFilter);
  }, [searchText]);

  return (
    <div className="row">
      <div className="col-5">
        {/* <SearchBar teams={leagueArr} /> */}
        <br />
        <LeaguesList />
      </div>

      <div className="col-7">
        <h1>{leaguesDeets.name}</h1>
        {leaguesDeets.logos && (
          <img src={leaguesDeets.logos.light} alt={leaguesDeets.name} />
        )}
        <p>Abbr: {leaguesDeets.abbr}</p>
        <Link
          to={{
            pathname: `/SeasonDetails/${props.match.params.league}`,
            state: {
              // name: props.location.state.name,
            },
          }}
        >
          Seasons
        </Link>
        <br />
        <Link
          to={{
            pathname: `/StandingDetails/${props.match.params.league}`,
            state: {
              // name: props.location.state.name,
            },
          }}
        >
          Standings
        </Link>
      </div>
    </div>
  );
};

export default LeagueDetails;
