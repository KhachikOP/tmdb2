import React from "react";
import "../App.css";
import Circle from "./Circle";

const MovieCard = ({ movie, name }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w200";

  function getMonthName(month) {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString("default", { month: "long" });
    return monthName;
  }
  console.log();

  return (
    <div>
      <div className="white_column no_pad">
        <section id="media_results" className="panel results">
          <div className="media_item results">
            <div id="page_1" className="page_wrapper">
              <div className="card style_1 container">
                <div className="image"></div>
                <div className="wrapper">
                  <a className="image">
                    <img
                      className="poster"
                      src={`${IMAGE_PATH}${movie.poster_path}`}
                    />
                  </a>
                </div>
                <div className="content">
                  <Circle
                    fill={movie.vote_average * 10}
                    rate={movie.vote_average * 10}
                  />

                  <h2>
                    <a href="#">{movie.title}</a>
                  </h2>
                  <p>
                    {getMonthName(movie.release_date.substring(5, 7)) +
                      "," +
                      movie.release_date.substring(8, 10) +
                      "," +
                      movie.release_date.substring(0, 4)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default MovieCard;

