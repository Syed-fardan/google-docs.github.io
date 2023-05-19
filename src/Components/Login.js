import GoogleButton from 'react-google-button'
import {getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged} from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login =()=>{
    let auth = getAuth();
    let navigate = useNavigate();
    let googleProvider = new GoogleAuthProvider();
    const sigin =()=>{
      signInWithPopup(auth,googleProvider).then(
        (res)=>{
            //console.log(res)
            localStorage.setItem("userEmail",res.user.email);
        }
      ).catch((error)=>{
        console.log(error);
      })
    }
    useEffect(()=>{
      onAuthStateChanged(auth,(res)=>{
        if(res){
           // console.log(res);
          navigate('/home');
        }
        else {
            navigate('/');
        }
      })
    },[auth,navigate]);
return (
    <div className='google-button'>
        
        <GoogleButton onClick={sigin}/>
    </div>
)
}
export default Login;