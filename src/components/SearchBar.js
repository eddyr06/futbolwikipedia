import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  useEffect(() => {
    const newFilter = props.teams.filter((value) => {
      return value.name.includes(searchText);
    });
    setFilteredData(newFilter);
  }, [searchText]);

  const handleFilter = (e) => {
    setSearchText(e.target.value);
  };
  console.log("this is filtered data", filteredData);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search For A Team.."
          name="search"
          value={searchText}
          onChange={handleFilter}
        />
        <div className="searchIcon"></div>
      </div>
      {/* <div className="dataResult">{filteredData}</div> */}
      {filteredData.map((result) => {
        return <p>{result.name}</p>;
      })}
    </div>
  );
};

export default SearchBar;
