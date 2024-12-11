import Shows from "./shows";
import { useEffect, useState } from "react";
import axios from "axios";

const GetShow = () => {

  const [shows, setShows] = useState([]);

  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/shows')
        .then((response) => {
            setShows(response.data.shows);
        })
        .catch((error) => {
            console.error("Error reloading data:", error);
        });
};

useEffect(() => {
    Reload();
}, []);
  return (
    <div>
      <h3>Hello from read component!</h3>
      <Shows myShows={shows} ReloadData={Reload}/>
    </div>
  );
}

export default GetShow;