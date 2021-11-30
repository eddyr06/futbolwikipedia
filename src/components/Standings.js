import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Standings = (props) => {
  // console.log("this is Standings props", props);
  const [standingsArr, setStandingsArr] = React.useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api-football-standings.azharimm.site/leagues/${props.match.params.league}/seasons`
      )
      .then((info) => {
        setStandingsArr(info.data.data);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  // console.log("this is seasonArr", seasonArr);

  return (
    <div>
      <div className="list-group">
        {standingsArr.seasons?.map((league) => {
          return (
            <Link
              className="list-group-item list-group-item-action league-links"
              to={{
                pathname: `/StandingDetails/${props.match.params.league}`,
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

export default Standings;
