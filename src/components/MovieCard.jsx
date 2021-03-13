import React from "react";
import "../css/moviecard.css";

function MovieCard(props) {
  /*?
  inline-flex hayat kurtarır! 
  */
  const { result, latest, trmovies, trseries, genres } = props;
  console.log("gg:", genres);
  return (
    <div className="cardback">
      <h5 className="text-white text-start ps-2 pt-5">Popular Movies</h5>
      {result.slice(0, 5).map((item, index) => (
        <div
          className="containerr d-inline-flex multiple-items owl-carousel"
          key={index}
        >
          <div className="item ">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt="Animals"
            />
            <div className="hoverdisplay text-start ps-2 mt-2">
              <div className="circle">
                <button
                  type="button"
                  className="btn btn-dark rounded-circle me-1 button-w-p"
                >
                  <i className="fas fa-play icon-w-p"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1 button-w"
                >
                  <i className="fas fa-plus icon-w"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1 button-w"
                >
                  <i className="fas fa-thumbs-up icon-w"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm button-w"
                >
                  <i className="fas fa-thumbs-down icon-w"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm float-end me-3 button-w"
                >
                  <i className="fas fa-chevron-down icon-w"></i>
                </button>
              </div>
              <div className="text-start card-title">
                <p>{item.title}</p>
                <p> {item.genres} </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h5 className="text-white text-start ps-2 pt-3">Latest Movies</h5>
      {latest.slice(0, 5).map((item, index) => (
        <div
          className="containerr d-inline-flex multiple-items owl-carousel"
          key={index}
        >
          <div className="item ">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt="Animals"
            />
            <div className="hoverdisplay text-start ps-2 mt-2">
              <div className="circle">
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-play "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-plus "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-thumbs-up "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm"
                >
                  <i className="fas fa-thumbs-down "></i>
                </button>

                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm float-end me-3"
                >
                  <i className="fas fa-chevron-down "></i>
                </button>
              </div>
              <div className="text-start card-title">
                <p>{item.title}</p>
                <p> {item.genres} </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h5 className="text-white text-start ps-2 pt-3">Trending Movies</h5>
      {trmovies.slice(0, 5).map((item, index) => (
        <div
          className="containerr d-inline-flex multiple-items owl-carousel"
          key={index}
        >
          <div className="item ">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt="Animals"
            />
            <div className="hoverdisplay text-start ps-2 mt-2">
              <div className="circle">
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-play "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-plus "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-thumbs-up "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm"
                >
                  <i className="fas fa-thumbs-down "></i>
                </button>

                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm float-end me-3"
                >
                  <i className="fas fa-chevron-down "></i>
                </button>
              </div>
              <div className="text-start card-title">
                <p>{item.title}</p>
                <p> {item.genres} </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h5 className="text-white text-start ps-2 pt-3">Trending Tv Series</h5>
      {trseries.slice(0, 5).map((item, index) => (
        <div
          className="containerr d-inline-flex multiple-items owl-carousel"
          key={index}
        >
          <div className="item ">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt="Animals"
            />
            <div className="hoverdisplay text-start ps-2 mt-2">
              <div className="circle">
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-play "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-plus "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm me-1"
                >
                  <i className="fas fa-thumbs-up "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm"
                >
                  <i className="fas fa-thumbs-down "></i>
                </button>

                <button
                  type="button"
                  className="btn btn-dark rounded-circle btn-sm float-end me-3"
                >
                  <i className="fas fa-chevron-down "></i>
                </button>
              </div>
              <div className="text-start card-title">
                <p>{item.name}</p>
                <p> {item.genres} </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default MovieCard;

/*
{result.slice(0, 4).map((item, index) => (
        <div className="container" key={index}>
          <a className="item"></a>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            alt="Animals"
          />
        </div>
      ))}
*/

/*
<div class="container">
        <a class="item">
          <img src="https://placeimg.com/640/480/animals" alt="Animals" />
        </a>
        <a href="#architecture" class="item">
          <img
            src="https://placeimg.com/640/480/architecture"
            alt="Architecture"
          />
        </a>
        <a href="#nature" class="item">
          <img src="https://placeimg.com/640/480/nature" alt="Nature" />
        </a>
        <a href="#people" class="item">
          <img src="https://placeimg.com/640/480/people" alt="People" />
        </a>
        <a href="#tech" class="item">
          <img src="https://placeimg.com/640/480/tech" alt="Tech" />
        </a>
      </div>

*/

/*
<React.Fragment className="container" key={index}>
            <a className="item">
              <img
                src={`https://image.tmdb.org/t/p/w200${item.backdrop_path}`}
                alt=""
              />
            </a>
          </React.Fragment>
*/
