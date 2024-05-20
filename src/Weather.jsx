import React, { useState } from "react";

const api = {
  key: "3edf295a5a0db848d54d26208f7fd43c",
  base: "https://api.openweathermap.org/data/2.5",
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
      </main>
    </div>
  );
};

export default Weather;
