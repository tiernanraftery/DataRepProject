import axios from "axios";
import { useState } from "react";

const AddShow = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const show = {title,year,poster,desc};
        console.log(show);

        axios.post('http://localhost:4000/api/shows',show)
        .then((res)=>{console.log(res.data)})
        .catch();
    }

    return (
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add show Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Show Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Show Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Show Description: </label>
                    <input type="text"
                        className="form-control"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Show"></input>
                </div>
            </form>
        </div>
    );
}
export default AddShow;