import { Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import { AppsOutlined } from '@mui/icons-material';
import googlePhotos from '../assets/google-photos.svg';
import gmail from '../assets/gmail.svg';
import gmap from '../assets/gmaps.svg';
import gdrive from '../assets/gdrive.svg';

// import   Link } from 'react-router-dom';
function Layout() {
  const { collapseSidebar,collapsed } = useProSidebar();
 
  const navigatePhotos =()=>{
    window.location.href="https://www.google.com/photos/about/";
  }
  const navigateMaps= ()=>{
    window.location.href="https://www.google.com/maps/";
  }
  const navigateMail =()=>{
    window.location.href="https://accounts.google.com/v3/signin/identifier?dsh=S201981609%3A1684588683886175&ifkv=Af_xneHxnemS8PXUcn4DStQ4cemkW3qK2SibBQ3nVoqAIZChmZNZ28xsdYPeYKvxJI61HSmBSkppDQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
  }
  const navigateDrive =()=>{
    window.location.href = "https://drive.google.com/drive/my-drive";
  }

  return (
    <div className='sidebar-setup'>
        <Sidebar collapsed={true}>
        <Menu>
          <MenuItem
            icon={<AppsOutlined/>}
            onClick={() => {
              collapseSidebar(!collapsed);
            }}
            style={{ textAlign: "center" }}
          >
            Google Apps
         </MenuItem>
         <MenuItem 
         onClick={navigatePhotos}
         >
         <div className='google-icon'>
          <img src={googlePhotos} alt="google-photos"></img>
          <span className='icon-name'>Google Photos</span> </div>
         </MenuItem>
         <MenuItem 
         onClick={navigateMail}
         >
         <div className='google-icon'>
          <img src={gmail} alt="gmail"></img>
          <span className='icon-name'>Gmail</span> </div>
         </MenuItem>
         <MenuItem 
         onClick={navigateMaps}
         >
         <div className='google-icon'>
          <img src={gmap} alt="google-maps"></img>
          <span className='icon-name'>Google Maps</span> </div>
         </MenuItem>
         <MenuItem
         onClick={navigateDrive} 
         >
         <div className='google-icon'>
          <img src={gdrive} alt="gdrive"></img>
          <span className='icon-name'>Google Drive</span> </div>
         </MenuItem>
          </Menu>
        </Sidebar>
        
      </div>
  );
}
export default Layout;