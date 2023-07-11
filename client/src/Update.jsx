import React,{useEffect,useState} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";



function Update() {
  const {id} = useParams();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [contact,setContact] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8800/api/students/update/"+id)
    .then(res => {
      console.log(res)
      setName(res.data[0].name);
      setEmail(res.data[0].email);
      setContact(res.data[0].contact);
      
    })
    .catch(err => console.log(err))


  }, [id]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
      await axios.put('http://localhost:8800/api/students/update/'+id, {name,email,contact})
      .then(res => {
        if(res.data.updated){
          navigate("/");
        } else {
          alert("Not Updated!")
  
        }
  
      })
  
  
    }
    
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
       <form onSubmit={handleSubmit}>
         <h2>Update Student</h2>
            <div className="md-2">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" 
                value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="md-2">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" 
                value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="md-2">
                <label className="form-label">Contact</label>
                <input type="number" className="form-control" 
                value={contact} onChange={e=>setContact(e.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2">Update</button>
       </form>
        </div>
    </div>
  )
}

export default Update