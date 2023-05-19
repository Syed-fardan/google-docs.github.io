//import logo from './logo.svg';
import './App.css';
//import { app } from './firebaseConfig';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login'; 
import Home from './Components/Home';
import { database } from '.';
import EditingDocument from './Components/EditingDocument';
function App() {
  //console.log(database);
  return (
    <div className="App">
      <h1>Google Docs Clone</h1>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path ='/home' element={<Home database={database}/>}/>
        <Route path ='/editor/:id' element={<EditingDocument database={database}/>}/>
      </Routes>
    </div>
  );
}

export default App;
