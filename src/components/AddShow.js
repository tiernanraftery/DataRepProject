import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

function AddShow() {
    const [show, setShow] = useState({ title: '', description: '', genre: '', year: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShow({ ...show, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/shows', show);
            navigate('/');
        } catch (error) {
            console.error('Error adding show:', error);
        }
    };

    return (
        <div>
            <h1>Add a New Show</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={show.title} onChange={handleChange} required />
                <input type="text" name="genre" placeholder="Genre" value={show.genre} onChange={handleChange} required />
                <input type="number" name="year" placeholder="Year" value={show.year} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={show.description} onChange={handleChange} required />
                <button type="submit">Add Show</button>
            </form>
        </div>
    );
}

export default AddShow;
