//import logo from './logo.svg';
import './App.css';
//import { app } from './firebaseConfig';

import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login'; 
import Home from './Components/Home';
import { database } from '.';
import EditingDocument from './Components/EditingDocument';
// import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
// import { AppsOutlined } from '@mui/icons-material';
import Layout from './Components/sidebar';
function App() {
  //console.log(database);
 // const { collapseSidebar } = useProSidebar();
  return (
    <div className='app-render'>
      <Layout/>
      {/* <div className='sidebar-setup'>
        <Sidebar>
        <Menu>
          <MenuItem
            icon={<AppsOutlined/>}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            Google Apps
         </MenuItem>
         <MenuItem 
         >
         <div className='google-icon'>
          <img src={googlePhotos} alt="google-photos"></img>
          <span className='icon-name'>Google Photos</span> </div>
         </MenuItem>
         <MenuItem 
         >
         <div className='google-icon'>
          <img src={gmail} alt="gmail"></img>
          <span className='icon-name'>Gmail</span> </div>
         </MenuItem>
          </Menu>
        </Sidebar>
        
      </div> */}
      <div className='App'>
    <header >
    <h1 >Google Docs Clone</h1>
   </header>
      
      
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path ='/home' element={<Home database={database}/>}/>
        <Route path ='/editor/:id' element={<EditingDocument database={database}/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
