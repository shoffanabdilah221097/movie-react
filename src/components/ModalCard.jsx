function ModalCard(movie, i) {
  
  return (
    <>
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
                    {movie.id}
                  </p>
                  <p>
                    <span style={{ color: "orange" }}>Popularity : </span>
                    {movie.popularity}
                  </p>
                  <p>
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
    </>
  );
}

export default ModalCard;
