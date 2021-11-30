import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  console.log(props);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  //   console.log("this is filtered data", filteredData);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search For A Team.."
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div className="searchIcon"></div>
      </div>
      {/* {props.team.map((result) => {
        return <p>{result.name}</p>;
      })} */}
    </div>
  );
};

export default SearchBar;
