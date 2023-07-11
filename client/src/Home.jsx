import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {Link} from "react-router-dom";


function Home() {
    const [data,setData] = useState([]);
    const getData = async () => {
        try{
            await axios.get("http://localhost:8800/api/students")
            .then(res =>{
                console.log(res)
                setData(res.data)
            })
            .then(err => console.log(err))


        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    
    }, []);
    const handleDelete = (id) => {
        axios.delete("http://localhost:8800/api/students/delete/"+id)
        .then(res => {
          window.location.reload()
        })
        .catch(err => console.log(err))
        
      }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-70 bg-white rounded p-3">
            <h2>List of the Students</h2>
           <table className="table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student,index) =>{
                    return <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.contact}</td>
                       <td>
                       <Link to={`/update/${student.id}`} className="btn btn-sm btn-primary me-2">Update</Link>
                       <button onClick={e=>handleDelete(student.id)} className="btn btn-sm btn-danger">Delete</button>
                       </td>
                    </tr>
                })}
            </tbody>
           </table>
          
        </div>
    </div>
  )
}

export default Home