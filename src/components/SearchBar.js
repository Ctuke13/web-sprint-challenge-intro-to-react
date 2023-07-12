import React, { useState } from "react";

const SearchBar = ({ handleChange, searchInput }) => {
  //   const [searchInput, setSearchInput] = useState("");

  //   const handleChange = (e) => {
  //     e.preventDefault();
  //     setSearchInput(e.target.value);
  //   };

  return (
    <input
      type="text"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput}
    />
  );
};

export default SearchBar;
