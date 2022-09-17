import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const random = await axios.get(requests.fetchNetflixOriginals);
      // console.log('helloooo',random.data.results[Math.floor(Math.random() * random.data.results.length - 1)]);  // big array with movies
      setRandomMovie(
        random.data.results[
          Math.floor(Math.random() * random.data.results.length - 1)
        ]
      );
    }
    fetchMovie();
  }, []);

  // console.log(randomMovie);

  //truncate function(when you have a lot of text and you need to put 3 dots after ex(100 words))
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}"
        )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {" "}
            {randomMovie?.title ||
              randomMovie?.name ||
              randomMovie?.original_name}{" "}
          </h1>
          {/* div >  buttons */}
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(randomMovie?.overview, 160)}
          </h1>
          {/* description */}
        </div>

        <div className="banner--fadeBottom"></div>
      </header>
    </>
  );
}

export default Banner;
