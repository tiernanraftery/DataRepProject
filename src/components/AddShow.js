import axios from "axios";
import { useState } from "react";
import './AddShow.css'; // Importing custom styles

const AddShow = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [desc, setDesc] = useState('');


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();// Prevent default form submission behavior (page refresh)

    // Create a show object using the form data
    const show = { title, year, poster, desc };
    console.log(show);

    // Make a POST request to the server to add a new show
    axios.post('http://localhost:4000/api/shows', show)
      .then((res) => {
        console.log(res.data);
        setTitle('');
        setYear('');
        setPoster('');
        setDesc('');
      })
      .catch((err) => {
        console.error("Error adding show:", err);//log any errors
      });
  };

  return (
    <div className="add-show-container">
      <h3>Create Your Own Programmes</h3>
      <form onSubmit={handleSubmit} className="add-show-form">
        <div className="form-group mb-3">
          <label htmlFor="title">Show Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter show title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}// Update title state on input change

          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="year">Show Year</label>
          <input
            type="text"
            id="year"
            className="form-control"
            placeholder="Enter show year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="poster">Show Poster URL</label>
          <input
            type="text"
            id="poster"
            className="form-control"
            placeholder="Enter poster URL"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="desc">Show Description</label>
          <textarea
            id="desc"
            className="form-control"
            placeholder="Enter a brief description of the show"
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}// Update desc state on input change
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success btn-lg">
            Add Show
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShow; // Export the AddShow component for use in other parts of the app
