import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.component.scss";

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm("");
    } else {
      alert("Bitte gib einen Suchbegriff ein.");
    }
  };

  return (
    <div className="flex items-center w-full px-5 py-5 box-border mx-0 justify-center lg:px-20">
      <div className="searchbar-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Suchbegriff eingeben..."
          className="searchbar-input"
        />
        <button onClick={handleSearch} className="searchbar-icon-button">
          <FaSearch size={16} />
        </button>
      </div>
    </div>
  );
};
