import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { collection } from 'firebase/firestore';
//import {collection} from 'firebase/firestore'
const Home = (props) => {
  //console.log(props);
  let auth = getAuth();
  //let collections = collection(database);
  let databaseCollection = collection(props.database, "doc-data");
  const userEmail = localStorage.getItem("userEmail");
  const [documentData, setDocumentdata] = useState();
  let navigate = useNavigate();
  const [isAdd, setIsAdd] = useState(false);
  const [title, setTittle] = useState("");
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  const showDocument =(id)=>{
    navigate(`/editor/${id}`);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res) {
        //console.log(res);
        navigate("/home");
      } else {
        navigate("/");
      }
    });
  }, [auth, navigate]);
  useEffect(() => {
    onSnapshot(databaseCollection, (response) => {
      setDocumentdata(
        response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
    //console.log(documentData);
  }, [databaseCollection]);
  const addDocuments = () => {
    addDoc(databaseCollection, {
      title: title,
      author: userEmail,
      body: "",
    })
      .then((res) => {
        toast.success("Data created", {
          autoClose: 1000,
        });
        setIsAdd(false);
        setTittle("");
        // console.log(res,"dataAdded");
      })
      .catch(() => {
        toast.error("Data Not Created", {
          autoClose: 1000,
        });
        console.log("notAdded");
      });
  };
  return (
    <div>
      <ToastContainer />
      <Button
        onClick={() => {
          setIsAdd((prev) => !prev);
        }}
        variant="outlined"
        startIcon={<Add />}
      >
        Add Document
      </Button>
      {isAdd ? (
        <div className="title-input">
          <input
            placeholder="Add Document"
            className="add-input"
            value={title}
            onChange={(event) => {
              setTittle(event.target.value);
            }}
          />
          <button className="add-button" onClick={addDocuments}>
            Add
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="button-alignment">
        <button onClick={logout} className="logOut-button">
          Log Out
        </button>
      </div>
      {/* <div>
        {documentData.map(doc => (
          <div>{doc.title}</div>
        ))}
      </div> */}
      {documentData && <div className="grid-main">
        {documentData.map((doc) => {
          return (
            <div key={doc.id} className="grid-child" onClick={()=>showDocument(doc.id)}>
              {doc.title}
            </div>
          );
        })}
      </div>}
      
    </div>
  );
};
export default Home;
