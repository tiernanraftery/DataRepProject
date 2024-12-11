import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';


const ShowItem = (props)=> {
  useEffect(() => {
    console.log("Show Item:", props.myshow);
  }, [props.myshow]); // Only run this effect when the mymovie prop changes

  const handleDelete = (e)=>{
    e.preventDefault();

    axios.delete('http://localhost:4000/api/show/'+props.myshow._id)
    .then((res)=>{
      props.Reload();
    })
    .catch((error)=>{
      console.log(error);
    });

  }

  return (
    <div>
      <Card>
        <Card.Header>{props.myshow.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.myshow.poster} alt={props.myshow.title} />
            <footer>{props.myshow.year}</footer>
            <p>{props.myshow.desc}</p>
          </blockquote>
        </Card.Body>

        <Link to={"/edit/" + props.myshow._id} className="btn btn-primary">Edit</Link>{/*This code snippet adds an "Edit" button to each movie item, allowing users to navigate to the edit page for that specific movie.*/}
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
      </Card>
    </div>
  );
}

export default ShowItem;