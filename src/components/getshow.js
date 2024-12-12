import Shows from "./shows";
import { useEffect, useState } from "react";
import axios from "axios";
import './getshow.css'; // Custom styles

const GetShow = () => {
  const [shows, setShows] = useState([]);

  const Reload = () => {
    console.log("Reloading show data...");
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
    <div className="get-show-container">
      <h3 className="text-center mt-4 mb-3">Explore Your Netflix Shows</h3>
      {shows.length > 0 ? (
        <Shows myShows={shows} ReloadData={Reload} />
      ) : (
        <div className="text-center">
          <p>No shows available. Add some to get started!</p>
        </div>
      )}
    </div>
  );
};

export default GetShow;
