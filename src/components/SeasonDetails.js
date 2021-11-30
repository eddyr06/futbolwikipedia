import React, { useEffect } from "react";
import axios from "axios";
import Seasons from "./Seasons";
import TeamNavBar from "./TeamNavBar";
import Table from "react-bootstrap/Table";

const SeasonDetails = (props) => {
  const [dataArr, setDataArr] = React.useState([]);
  const [seasonDeets, setSeasonDeets] = React.useState({});
  useEffect(() => {
    axios
      .get(
        `https://api-football-standings.azharimm.site/leagues/${props.match.params.league}/seasons`
      )
      .then((info) => {
        setDataArr(info.data.data.seasons);

        let year = info.data.data.seasons.find((num) => {
          return num.year == props.location.state.year;
        });
        if (year) {
          setSeasonDeets(year);
        }
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, [props]);

  return (
    <div>
      <div>
        {/* <p>Season Details</p> */}
        <TeamNavBar {...props} text="Season Details" />
      </div>
      <div className="row">
        <h2>{props.location.state.name}</h2>
        <br />
        <br />
        <div className="col-3">
          <p>Select a year:</p>
          <Seasons {...props} />
        </div>
        {seasonDeets.types ? (
          <div className="col-7">
            <h4>{seasonDeets?.displayName}</h4>
            <p>Start Date: {seasonDeets?.startDate}</p>
            <p>End Date: {seasonDeets?.endDate}</p>
            <Table responsive striped bordered hover size="sm">
              {seasonDeets.types &&
                seasonDeets.types.map((types) => {
                  // console.log(types);
                  return (
                    <>
                      <thead>
                        <tr>
                          <th colSpan="2"> {types.name}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Start Date: {types.startDate}</td>
                          <td>End Date: {types.endDate}</td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
            </Table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SeasonDetails;
