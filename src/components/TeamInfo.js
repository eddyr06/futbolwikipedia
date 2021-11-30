import React, { useEffect } from "react";
import axios from "axios";
import TeamNavBar from "./TeamNavBar";
import { Table } from "react-bootstrap";

const TeamInfo = (props) => {
  //   console.log("this is props in teaminfo", props);
  const [teamInfo, setTeamInfo] = React.useState({});
  useEffect?.(() => {
    axios
      .get(
        `https://api-football-standings.azharimm.site/leagues/${props.location.state.name}/standings?season=${props.location.state.year}&sort=asc`
      )
      .then((info) => {
        // console.log("this is info in TeamInfo", info.data.data.standings);
        let find = info.data.data.standings.find((item) => {
          return item.team.name === props.match.params.league;
        });

        setTeamInfo(find);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, [props]);

  console.log("this is teaminfo after find", teamInfo);

  return (
    <>
      <TeamNavBar />
      <div>
        <h3>{teamInfo.team?.displayName}</h3>
        <img
          src={teamInfo.team?.logos[0].href}
          alt={teamInfo.team?.displayName}
        />
      </div>
      <br />
      <div>
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {teamInfo.stats?.map((stats) => {
              return (
                <>
                  <tr>
                    <td>{stats.displayName}</td>
                    <td>{stats.displayValue}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>

      <button onClick={props.history.goBack}>Go Back</button>
    </>
  );
};

export default TeamInfo;
