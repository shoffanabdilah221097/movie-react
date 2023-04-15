function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark text-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html">
            CANIM
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="home.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tvshow.html">
                  TV Show
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="movie.html">
                  Movie
                </a>
              </li>
            </ul>
            {/* <!--Dark mode start--> */}
            <div className="form-check form-switch d-flex">
              <input className="form-check-input" style={{ width: 50, height: 25, marginRight: 5 }} type="checkbox" role="switch" id="darkmode" onClick={() => ubahMode()} />
            </div>
            {/* <!--Dark mode End--> */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="button">
                Search
              </button>
            </form>
            <button type="button" className="btn btn-outline-light ms-2" data-bs-toggle="modal" data-bs-target="#modalLogin">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
