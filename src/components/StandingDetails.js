import React, { useEffect } from "react";
import axios from "axios";
import TeamNavBar from "./TeamNavBar";
import Standings from "./Standings";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const StandingDetails = (props) => {
  // console.log("this is standingdetails props", props);
  // console.log("this is standingdetails props year", props.location.state.year);
  const [standingDeets, setStandingDeets] = React.useState({});
  const [test, setTest] = React.useState({});

  useEffect?.(() => {
    axios
      .get(
        `https://api-football-standings.azharimm.site/leagues/${props.match.params.league}/standings?season=${props.location.state.year}&sort=asc`
      )
      .then((info) => {
        // console.log("this is info in standings", info.data.data);
        setStandingDeets(info.data.data);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, [props]);

  console.log("this is standingdeets", standingDeets.standings);
  console.log("this is test", test);
  return (
    <>
      <TeamNavBar {...props} text="Standing Details" />
      <h5>{standingDeets?.name}</h5>
      <h6>{standingDeets?.seasonDisplay}</h6>
      <br />
      <div className="row">
        <div className="col-2">
          <Standings {...props} />
        </div>
        <div className="col-10">
          <Table responsive striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Team</th>
                {/* <th>{standingDeets.standings}</th> */}
                <th>Wins</th>
                <th>Losses</th>
                <th>Draws</th>
                <th>Games Played</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Points</th>
                <th>Rank Change</th>
                <th>Rank</th>
                <th>Goal Difference</th>
                <th>Points Deductions</th>
                <th>Points Per Game</th>
                <th>Overall Record</th>
              </tr>
            </thead>
            {/* {standingDeets.standings?.map((name) => {
              console.log("this is name", name);
              return (
                <>
                  {name.stats?.map((info) => {
                    return (
                      <thead>
                        <tr>
                          <th>{info.displayName}</th>
                        </tr>
                      </thead>
                    );
                  })}
                </>
              );
            })} */}
            {/* {standingDeets.standings?.map((name) => {
              return (
              <>
                  {name.stats?.map((info) => {
                    
                    console.log("this is info", info);
                    return (
                      <>
                      <thead>
                        <tr>
                          <th>{info.displayName}</th>
                        </tr>
                      </thead>
                    </>
                  })
                  
              }
              </>
                )
              })
            
            } */}
            {/* {standingDeets.standings?.map((stats) => {
              // console.log(stats.team.name);
              return (
                <>
                  <thead>
                    <tr>
                      <th>Team</th>
                      {stats.stats?.map((info) => {
                        return <th>{info.displayName}</th>;
                      })}
                    </tr>
                  </thead>
                </>
              );
            })} */}
            {standingDeets.standings?.map((stats) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <Link
                        className="list-group-item list-group-item-action league-links"
                        // to={`/TeamInfo/${stats.team.name}`}
                        to={{
                          pathname: `/TeamInfo/${stats.team.name}`,
                          state: {
                            name: props.match.params.league,
                            year: standingDeets.season,
                          },
                        }}
                      >
                        <td>{stats.team.displayName}</td>
                      </Link>
                      {stats.stats?.map((info) => {
                        return <td>{info.displayValue}</td>;
                      })}
                    </tr>
                  </tbody>
                </>
              );
            })}
          </Table>
        </div>
      </div>
    </>
  );
};

export default StandingDetails;
