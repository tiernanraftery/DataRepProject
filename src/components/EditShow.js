import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditShow() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState({ title: '', description: '', genre: '', year: '' });

    useEffect(() => {
        fetchShow();
    }, []);

    const fetchShow = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/shows/${id}`);
            setShow(response.data);
        } catch (error) {
            console.error('Error fetching show:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShow({ ...show, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/shows/${id}`, show);
            navigate('/');
        } catch (error) {
            console.error('Error updating show:', error);
        }
    };

    return (
        <div>
            <h1>Edit Show</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={show.title} onChange={handleChange} required />
                <input type="text" name="genre" placeholder="Genre" value={show.genre} onChange={handleChange} required />
                <input type="number" name="year" placeholder="Year" value={show.year} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={show.description} onChange={handleChange} required />
                <button type="submit">Update Show</button>
            </form>
        </div>
    );
}

export default EditShow;
