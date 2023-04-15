import { apiTmdb } from "../api/apiTmdb";
import { useState, useEffect } from "react";
// import ModalCard from "./ModalCard";

function Card() {
  const [filmPopular, setFilmPopular] = useState([]);
  async function getData() {
    await apiTmdb
      .get("movie/popular")
      .then(async (response) => {
        const movieData = await Promise.all(response.data.results)
        setFilmPopular(movieData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h4 style={{ color: "white" }}>Popular</h4>
        <div className="row g-4 mt-3">
          {filmPopular.slice(0, 12).map((movie, i) => {
            return (
              <div key={i} className="col-sm-6 col-md-4 col-lg-2">
                <div className="card bg-transparent gambar" data-bs-toggle="modal" data-bs-target={`#modal${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="movie" />
                  <div className="card-body">
                    <h6 className="card-title text-white">{movie.original_title}</h6>
                    {/* <p className="card-title text-white">{movie.overview}</p>
                    <p className="card-title text-white">{movie.id}</p>
                    <p className="card-title text-white">{movie.popularity}</p>
                    <p className="card-title text-white">{movie.vote_average}</p> */}
                  </div>
                </div>
                {/* <ModalCard movie={movie} i={i}/> */}
                {/* Modal */}
                <div className="modal fade" id={`modal${movie.id}`} tabIndex="-1" aria-labelledby={`modalLabel${movie.id}`} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`modalLabel${movie.id}`} style={{ color: "white" }}>
                          {movie.original_title}
                        </h1>
                        <button type="tonton" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="movie" />
                          </div>
                          <div className="col-md-6 col-12">
                            <p>
                              <span style={{ color: "orange" }}>Overview : </span>
                              <br></br>
                              {movie.overview}
                            </p>
                            <p>
                              <span style={{ color: "orange" }}>Id : </span>
                              {movie.id} <br />
                              <span style={{ color: "orange" }}>Popularity : </span>
                              {movie.popularity} <br />
                              <span style={{ color: "orange" }}>Rating : </span>
                              {movie.vote_average}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="tonton" className="btn btn-warning">
                          Watching
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
