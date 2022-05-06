// import {useEffect, useState} from 'react';
// import '../App.css';
// import MovieCard from './MovieCard';
// function Dropdown({ }) {
//     const [result, setResult] = useState();

//     useEffect(() => {
//       console.log('result changed: ' + result)
//     }, [result]);

//     return (
//       <div>
//         <select id="sort" 
//                 onChange={(e) => setResult(e.target.value)}>
//           <option value="Popularity Descending">Popularity Descending</option>
//           <option value="Popularity Ascending">Popularity Ascending</option>
//           <option value="Rating Descending">Rating Descending</option>
//           <option value="Rating Ascending">Rating Ascending</option>
//           <option value="Release Date Descending">Release Date Descending</option>
//           <option value="Release Date Ascending">Release Date Ascending</option>
//           <option value="Title A-Z">Title A-Z</option>
//           <option value="Title Z-A">Title A-Z</option>
//         </select>
//         {/* <MovieCard dropDownResult={result}/> */}
//       </div>
//     );
// }

// export default Dropdown;
