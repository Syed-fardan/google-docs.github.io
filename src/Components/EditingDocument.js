import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState,useEffect,useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { collection,doc,updateDoc ,onSnapshot} from "firebase/firestore"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditingDocument =(props)=>{
    const isRendered = useRef();
     const [editedDated, setEditedData] =useState('');
     const [docTitle,setDocumentTitle] = useState('');
     let navigate =useNavigate();
     let databaseCollection = collection(props.database,'doc-data');
    let params = useParams();
const getEditedData =(value)=>{
    //console.log(value);
    setEditedData(value);
}
useEffect(()=>{
    
    const updateDocumentBody = setTimeout (()=>{
        let updateDocument = doc(databaseCollection, params.id);
        updateDoc(updateDocument,{
            body:editedDated
        }).then(()=>{
            toast.success("updated the document",{
                autoClose:1000
            })
        }).catch(()=>{
            toast.error("not updated",{
                autoClose:1000
            })
        })
    },1000)
    return ()=> clearTimeout(updateDocumentBody);

 
},[editedDated])
useEffect(()=>{
    if(isRendered.current) {
        return
    }
    isRendered.current = true;
    const document = doc(databaseCollection,params.id);
    onSnapshot(document,(doc)=>{
        setDocumentTitle(doc.data().title);
        // console.log(doc.data().body);
        setEditedData(doc.data().body);
    })
},[])
  return(<>
  <ToastContainer/>
  <button className='logOut-button1' onClick={()=>{navigate('/home')}}>Go Back</button>
  <div className='editDocs-main'>
  {docTitle && <h3>{docTitle}</h3>}
  <div className='editDocs-inner'>
  {<ReactQuill value={editedDated} onChange={getEditedData} style={{margin:"20px"}}/>}
  </div>
 
  </div>
  
 </>)
}
export default EditingDocument;