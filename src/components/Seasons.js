import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Seasons = (props) => {
  // console.log("this is SEASONS props", props);
  const [seasonArr, setSeasonArr] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api-football-standings.azharimm.site/leagues/${props.match.params.league}/seasons`
      )
      .then((info) => {
        // console.log("this is api from seasons", info);
        setSeasonArr(info.data.data);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  // console.log("this is seasonArr", seasonArr);

  return (
    <div>
      <div className="list-group">
        {seasonArr.seasons?.map((league) => {
          // console.log("this is league,year", league.year);
          // console.log(props.match.params.league);
          return (
            <Link
              className="list-group-item list-group-item-action league-links"
              to={{
                pathname: `/SeasonDetails/${props.match.params.league}`,
                state: {
                  name: props.location.state.name,
                  year: league.year,
                },
              }}
            >
              <p>{league.year}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;
