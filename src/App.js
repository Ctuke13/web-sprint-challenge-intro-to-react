import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Character from "./components/Character";
import SearchBar from "./components/SearchBar";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchMatch, setSearchMatch] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => setCharacters(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filteredChars = characters.filter((char) => {
      let name = char.name.toLowerCase();
      return name.includes(searchInput.toLowerCase());
    });
    setSearchMatch(filteredChars);
  }, [searchInput, characters]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <SearchBar
        searchInput={searchInput}
        handleChange={handleChange}
        chars={characters}
      />
      <div>
        {searchMatch.map((char, idx) => (
          <Character
            key={idx + 1}
            name={char.name}
            height={char.height}
            mass={char.mass}
            hair={char.hair_color}
            skin={char.skin_color}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
