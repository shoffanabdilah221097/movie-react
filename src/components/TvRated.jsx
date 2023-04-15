import { apiTmdb } from "../api/apiTmdb";
import { useState, useEffect } from "react";

function TvRated() {
  const [filmTvRated, setFilmTvRated] = useState([]);
  async function getData() {
    await apiTmdb
      .get("tv/top_rated")
      .then(async (response) => {
        const tvData = await Promise.all(response.data.results);
        setFilmTvRated(tvData);
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
        <h4 style={{ color: "white" }}>Top Tv Rated</h4>
        <div className="row g-4 mt-3">
          {filmTvRated.slice(0, 12).map((tv, i) => {
            return (
              <div key={i} className="col-sm-6 col-md-4 col-lg-2">
                <div className="card bg-transparent gambar" data-bs-toggle="modal" data-bs-target={`#modal${tv.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className="card-img-top" alt="tv" />
                  <div className="card-body">
                    <h6 className="card-title text-white">{tv.original_name}</h6>
                  </div>
                </div>
                <div className="modal fade" id={`modal${tv.id}`} tabIndex="-1" aria-labelledby={`modalLabel${tv.id}`} aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`modalLabel${tv.id}`} style={{ color: "white" }}>
                          {tv.original_title}
                        </h1>
                        <button type="tonton" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-6 col-12">
                            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} className="card-img-top" alt="tv" />
                          </div>
                          <div className="col-md-6 col-12">
                            <p>
                              <span style={{ color: "orange" }}>Overview : </span>
                              <br></br>
                              {tv.overview}
                            </p>
                            <p>
                              <span style={{ color: "orange" }}>Id : </span>
                              {tv.id} <br />
                              <span style={{ color: "orange" }}>Popularity : </span>
                              {tv.popularity} <br />
                              <span style={{ color: "orange" }}>Rating : </span>
                              {tv.vote_average}
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

export default TvRated;
