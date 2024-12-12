
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
    //Extract the 'id' parameter from the route
  let { id } = useParams();

  //state variables to manage form input fields
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();//hook to navigate programmatically



  //fetch the current show data when the component loads
useEffect(() => {
    axios.get('http://localhost:4000/api/show/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setYear(response.data.year);
            setPoster(response.data.poster);
            setDesc(response.data.desc);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

const handleSubmit = (event) => {
    event.preventDefault();

    //construct the updated show object 
    const newShow = { id, title, year, poster, desc };
    // Make a PUT request to update the show on the server
    axios.put('http://localhost:4000/api/show/' + id, newShow)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

return (
    // Render the form to edit the show details
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Movie Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Release Year: </label>
                <input type="text" 
                className="form-control" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Poster URL: </label>
                <input type="text" 
                className="form-control" 
                value={poster} 
                onChange={(e) => setPoster(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Show description : </label>
                <input type="text" 
                className="form-control" 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Show" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}