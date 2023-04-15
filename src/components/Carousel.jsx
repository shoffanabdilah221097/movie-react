import { useEffect, useState } from "react";
import { apiTmdb } from "../api/apiTmdb";

function Carousel() {
  const [filmPopular, setFilmPopular] = useState([]);
  function getMovie() {
    apiTmdb
      .get("movie/upcoming")
      .then((response) => {
        setFilmPopular(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {filmPopular.slice(6, 12).map((movie, i) => {
            return (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} className="d-block w-100" alt="..." />
              </div>
            );
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
