import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "../css/moviecard.css";

function PopularMovies() {
  const [result, setResult] = useState([]);
  const [latest, setLatest] = useState([]);
  const [trmovies, setTrmovies] = useState([]);
  const [trseries, setTrseries] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ed31b81064e7c617fa201d727de6c48c&language=en-US&page=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setResult(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=ed31b81064e7c617fa201d727de6c48c&language=en-US&page=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLatest(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=ed31b81064e7c617fa201d727de6c48c",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTrmovies(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=ed31b81064e7c617fa201d727de6c48c",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTrseries(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://api.themoviedb.org/3/movie/150?api_key=ed31b81064e7c617fa201d727de6c48c&language=en-US",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setGenres(result.genres);
        console.log("genre:", genres);
      })
      .catch((error) => console.log("error", error));
    console.log(genres[0]);
    console.log(genres[1]);
    console.log(genres[2]);
  }, [result]);

  return (
    <div>
      <MovieCard
        result={result}
        latest={latest}
        trmovies={trmovies}
        trseries={trseries}
        genres={genres}
      />
    </div>
  );
}

export default PopularMovies;
