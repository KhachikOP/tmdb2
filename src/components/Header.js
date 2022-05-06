import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../media/logo.svg";
import footerLogo from "../media/footer.svg";
import MovieCard from "./MovieCard";
import "../App.css";

const Header = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?api_key=${apiKey}`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  const [showResults, setShowResults] = useState(true);

  const renderMovies = () =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const [result, setResult] = useState();
  const [order, setOrder] = useState("ratingAsc");

  const sortingByPopularity = (col) => {
    if (result === "popularityDesc") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.popularity < b.popularity) return -1;
        if (a.popularity > b.popularity) return 1;
      });

      setMovies(sorted);
      setOrder("popularityAsc");
    } else if (result === "popularityAsc") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.popularity > b.popularity) return -1;
        if (a.popularity < b.popularity) return 1;
      });

      setMovies(sorted);
      setOrder("popularityDesc");
    }
  };
  const sortingByRating = (col) => {
    if (result === "ratingDesc") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
      });

      setMovies(sorted);
      setOrder("ratingAsc");
    } else if (result === "ratingAsc") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
      });

      setMovies(sorted);
      setOrder("ratingDesc");
    }
  };

  const sortingByReleaseDate = (col) => {
    if (result === "releaseDesc") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
      });

      setMovies(sorted);
      setOrder("releaseAsc");
    } else if (result === "releaseAsc") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
      });

      setMovies(sorted);
      setOrder("releaseDesc");
    }
  };

  const sortingByAZ = (col) => {
    if (result === "A-Z") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
      });

      setMovies(sorted);
      setOrder("Z-A");
    } else if (result === "Z-A") {
      const sorted = [...movies].sort(function (a, b) {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
      });

      setMovies(sorted);
      setOrder("A-Z");
    }
  };

  function search() {
    console.log("clicked");

    if (result == "popularityDesc") {
      sortingByPopularity();
    } else if (result == "popularityAsc") {
      sortingByPopularity();
    } else if (result == "ratingDesc") {
      sortingByRating();
    } else if (result == "ratingAsc") {
      sortingByRating();
    } else if (result == "releaseDesc") {
      sortingByReleaseDate();
    } else if (result == "releaseAsc") {
      sortingByReleaseDate();
    } else if (result == "A-Z") {
      sortingByAZ();
    } else if (result == "Z-A") {
      sortingByAZ();
    } else {
      console.log("popularityAsc");
    }
  }

  return (
    <div className="App">
      <div className="page_wrap">
        <header>
          <div className="content">
            <div className="sub_media">
              <div className="nav_wrapper">
                <a className="logo" href="/">
                  <img src={logo} width="154" height="20"></img>
                </a>
                <ul
                  className="dropdown_menu navigation k-widget k-reset k-header k-menu k-menu-horizontal"
                  data-role="menu"
                  tabIndex="0"
                  role="menubar"
                >
                  <li className="k-item k-menu-item k-state-default k-first">
                    <a className="no_click k-link k-menu-link" href="/">
                      Movies
                    </a>
                  </li>
                  <li className="k-item k-menu-item k-state-default k-first">
                    <a className="no_click k-link k-menu-link" href="/">
                      TV shows
                    </a>
                  </li>
                  <li className="k-item k-menu-item k-state-default k-first">
                    <a className="no_click k-link k-menu-link" href="/">
                      People
                    </a>
                  </li>
                  <li className="k-item k-menu-item k-state-default k-first">
                    <a className="no_click k-link k-menu-link" href="/">
                      More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <ul className="primary">
                  <li className="glyph new_buttons">
                    <a className="new_icon no_click" href="#">
                      <span className="glyphicons_v2 plus white"></span>
                    </a>
                  </li>
                  <li className="translate" data-role="tooltip">
                    <div>en</div>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Join TMDB</a>
                  </li>
                  <li className="glyph search_butonns">
                    <a className="search" href="#">
                      <span className="glyphicons_v2 search blue"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main id="main" className="smaller subtle show_search_false">
          <section className="inner_content">
            <div id="media_v4" className="media discover">
              <div className="column_wrapper">
                <div className="content_wrapper">
                  <div className="title">
                    <h2>Popular Movies</h2>
                  </div>
                  <div className="content">
                    <div>
                      <div className="filter_panel card">
                        <div className="name">
                          <h2>Sort</h2>
                          <span
                            onClick={() => setShowResults(!showResults)}
                            className="glyphicons_v2 chevron-right"
                          ></span>
                        </div>
                       {showResults ? <div className="filter hidden">
                          <h3>Sort Results By</h3>
                          <select
                            id="sort"
                            onChange={(e) => setResult(e.target.value)}
                          >
                            <option value="popularityDesc">
                              Popularity Descending
                            </option>
                            <option value="popularityAsc">
                              Popularity Ascending
                            </option>
                            <option value="ratingDesc">
                              Rating Descending
                            </option>{" "}
                            <option value="ratingAsc">Rating Ascending</option>
                            <option value="releaseDesc">
                              Release Date Descending
                            </option>
                            <option value="releaseAsc">
                              Release Date Ascending
                            </option>
                            <option value="A-Z">Title A-Z</option>
                            <option value="Z-A">Title A-Z</option>
                          </select>
                        </div> : null }
                      </div>
                      <div className="apply small background_color light_blue disabled ">
                        <div className="loading_wrapper hide">
                          <div className="ball-scale-multiple white loader"></div>
                        </div>
                        <p className="load_more">
                          <a
                            className="no click load_more"
                            href="#"
                            onClick={() => search()}
                          >
                            Search
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="container">{renderMovies()}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="single_column movie">
        <nav>
          <div className="join">
            <img src={footerLogo} width="130" height="94"></img>
          </div>
          <div>
            <h3>The Basics</h3>
            <ul>
              <li>
                <a href="#">About TMDB</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support Forums </a>
              </li>
              <li>
                <a href="#">API </a>
              </li>
              <li>
                <a href="#">System Status </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get Involved</h3>
            <ul>
              <li>
                <a href="#">About TMDB</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support Forums </a>
              </li>
              <li>
                <a href="#">API </a>
              </li>
              <li>
                <a href="#">System Status </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#">About TMDB</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support Forums </a>
              </li>
              <li>
                <a href="#">API </a>
              </li>
              <li>
                <a href="#">System Status </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">About TMDB</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Support Forums </a>
              </li>
              <li>
                <a href="#">API </a>
              </li>
              <li>
                <a href="#">System Status </a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Header;
