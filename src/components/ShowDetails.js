import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetchShow();
    }, []);

    const fetchShow = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/shows/${id}`);
            setShow(response.data);
        } catch (error) {
            console.error('Error fetching show details:', error);
        }
    };

    return (
        <div>
            {show ? (
                <div>
                    <h1>{show.title}</h1>
                    <p>{show.genre} | {show.year}</p>
                    <p>{show.description}</p>
                </div>
            ) : (
                <p>Loading show details...</p>
            )}
        </div>
    );
}

export default ShowDetails;
