import { apiTmdb } from "../api/apiTmdb";
import { useState, useEffect } from "react";
// import ModalCard from "./ModalCard";

function UpComing() {
  const [filmUpComing, setFilmUpComing] = useState([]);
  async function getData() {
    await apiTmdb
      .get("movie/upcoming")
      .then(async (response) => {
        const movieData = await Promise.all(response.data.results)
        setFilmUpComing(movieData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // const getData = async () => {
  //   const popularMovie = await apiTmbd.get("movie/popular");
  //   const test = await Promise.all(popularMovie.data.results);
  //   setFilmPopular(test);
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h4 style={{ color: "white" }}>Movie Up Coming</h4>
        <div className="row g-4 mt-3">
          {filmUpComing.slice(5, 17).map((movie, i) => {
            return (
              <div key={i} className="col-sm-6 col-md-4 col-lg-2">
                <div className="card bg-transparent gambar" data-bs-toggle="modal" data-bs-target={`#modal${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="movie" />
                  <div className="card-body">
                    <h6 className="card-title text-white">{movie.original_title}</h6>
                  </div>
                </div>
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

export default UpComing;
