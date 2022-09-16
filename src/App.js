import React from "react";
import "./App.css";
import Rows from "./Rows";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1> Hey Elton, let's build netflix clone webapp!!</h1>
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now!" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horrorr Movies" fetchUrl={requests.fetchHorrorrMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
