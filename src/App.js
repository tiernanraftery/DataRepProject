
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddShow from './component/AddShow';
import EditShow from './component/Editshow';
import ShowDetails from './component/ShowDetails';
import ShowList from './component/ShowList';
function App() {
  return (
   <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/addshow"element={<AddShow/>}/>
        <Route path="/EditShow"element={<EditShow/>}/>
        <Route path="/ShowDetails"element={<ShowDetails/>}/>
        <Route path="/ShowList"element={<ShowList />}/>

      </Routes>
   </Router>
  );
}

export default App;
