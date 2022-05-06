import "../App.css";
import { useEffect, useState } from "react";

const ShowResults = (movies) => {
  const [result, setResult] = useState();

  // useEffect(() => {
  //    if(result == "popularityDesc") {
  //        console.log(movies);
  //    }
  //    else if(result == "popularityAsc") {
  //     console.log(movies);
  //    }
  //    else if(result == "ratingDesc") {
  //     console.log('ratingDesc')
  //    }
  //    else if(result == "ratingAsc") {
  //     console.log('ratingAsc')
  //    }
  //    else if(result == "releaseDesc") {
  //     console.log('releaseDesc')
  //    }
  //    else if(result == "releaseAsc") {
  //     console.log('releaseAsc')
  //    }
  //    else if(result == "A-Z") {
  //     console.log('A-Z')
  //    }
  //    else if(result == "Z-A") {
  //     console.log('Z-A')
  //    }
  //    else {
  //     console.log('popularityDesc')
  //    }
  //   }, [result]);
};

export default ShowResults;
