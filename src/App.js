
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigator from './components/Navigator';
import AddShow from './components/AddShow';
import EditShow from './components/EditShow';
import ShowDetails from './components/ShowDetails';
import ShowList from './components/ShowList';
import GetShow from './components/getshow';

function App() {
  return (
   <Router>
      <Navigator/>
      <Routes>
        <Route path="/addshow"element={<AddShow/>}/>
        <Route path="/edit/:id"element={<EditShow/>}/>
        <Route path="/getshow"element={<GetShow/>}/>

      </Routes>
   </Router>
  );
}

export default App;
