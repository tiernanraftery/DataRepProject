import Shows from "./shows";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [shows, setShows] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h3>Hello from read component!</h3>
      <Shows myShows={shows} />
    </div>
  );
}

export default Read;