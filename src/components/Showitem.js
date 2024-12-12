import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import './ShowItem.css'; // Import custom CSS for additional styling

const ShowItem = (props) => {
  useEffect(() => {
    console.log("Show Item:", props.myshow);
  }, [props.myshow]);

  const handleDelete = (e) => {
    e.preventDefault();

    axios.delete('http://localhost:4000/api/show/' + props.myshow._id)
      .then((res) => {
        props.Reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="show-item-container">
      <Card className="shadow-lg mb-4">
        <Card.Img
          variant="top"
          src={props.myshow.poster}
          alt={props.myshow.title}
          className="show-poster"
        />
        <Card.Body>
          <Card.Title className="text-center">{props.myshow.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            Year: {props.myshow.year}
          </Card.Subtitle>
          <Card.Text className="text-justify">{props.myshow.desc}</Card.Text>
          <div className="d-flex justify-content-between">
            <Link to={`/edit/${props.myshow._id}`} className="btn btn-primary">
              Edit
            </Link>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowItem;
