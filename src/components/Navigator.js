import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList';
import AddShow from './components/AddShow';
import EditShow from './components/EditShow';
import ShowDetails from './components/ShowDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ShowList />} />
                <Route path="/add" element={<AddShow />} />
                <Route path="/edit/:id" element={<EditShow />} />
                <Route path="/details/:id" element={<ShowDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
