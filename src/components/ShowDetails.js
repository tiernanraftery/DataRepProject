import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShowDetails() {
        // Use the useParams hook to get the dynamic ID from the URL
    const { id } = useParams();
    const [show, setShow] = useState(null);

        // useEffect hook to fetch show details when the component mounts
    useEffect(() => {
        fetchShow();
    }, []);// Empty dependency array means this runs only once when the component mounts

    // Function to fetch show details from the API
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
            {/* Check if show data has been loaded */}
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
