import React from "react";
import Header from "../components/Header";
import Notfnd from "../video/nardo.mp4";
import Notfnd1 from "../video/nardo2.mp4";
import Notfnd2 from "../video/vinlan.mp4";
import "../css/navbar.css";
import { Button } from "react-bootstrap";
import PopularMovies from "../components/PopularMovies";

function Home(props) {
  const videos = [
    { id: 0, title: "Naruto Shippuden UNS 4", src: Notfnd },
    { id: 1, title: "Naruto Shippuden: The Last", src: Notfnd1 },
    { id: 2, title: "Vinland Saga", src: Notfnd2 },
  ];
  const get = Math.floor(Math.random() * videos.length);

  return (
    <div className="text-center">
      <Header />
      <video autoPlay loop muted width="100%" heigth="100%">
        <source src={videos[get].src} type="video/mp4" />
      </video>
      <div className="controls">
        <h1 className="text-white pb-4">{videos[get].title}</h1>
        <Button className="py-2 px-4 float-start me-2" variant="light">
          <i className="fas fa-play me-3"></i> <span>Oynat</span>
        </Button>
        <Button className="py-2 px-4 float-start" variant="secondary">
          <i className="fas fa-info-circle me-3"></i>{" "}
          <span>Daha Fazla Bilgi</span>
        </Button>
      </div>
      <PopularMovies />
    </div>
  );
}

export default Home;
