import React from "react";
import "../App.css";

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
        {" "}
        {/*Messege for future. There might be problem in css */}
        <section id="media_results" className="panel results">
          <div className="media_item results">
            <div id="page_1" className="page_wrapper">
              <div className="card style_1">
                <div className="image"></div>
                <div className="wrapper">
                  <a className="image">
                    <img
                      className="poster"
                      src={`${IMAGE_PATH}${movie.poster_path}`}
                      alt=""
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="consensus tight">
                    <div className="outer_ring">
                      <div className="user_score_chart " data-percent="72">
                        <div className="percent">
                          <span className="icon icon-r78">
                            {movie.vote_average * 10}
                          </span>
                        </div>
                        <canvas height="34" width="34"></canvas>
                      </div>
                    </div>
                  </div>
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

{
  /* <img src ={`${IMAGE_PATH}${movie.poster_path}`} alt=""/>
        <h5>{movie.title}</h5>


        // {movie.poster_path ? <img src ={`${IMAGE_PATH}${movie.poster_path}`} alt=""/> : null}
// {movie.title}




 {/* <div className='white_column no_pad'>  {/*Messege for future. There might be problem in css 
       <section id="media_results" className="panel results">
          <div className='media_item results'>
            <div id='page_1' className="page_wrapper">
                <div className="card style_1">
                  <div className="image"></div>
                      <div className="wrapper">
                      <a className='image'> 
                        <img  className='poster' src ={`${IMAGE_PATH}${movie.poster_path}`}/> 
                      </a>
                      </div>
                </div>
            </div>
          </div>
       </section>
     </div> */
}
