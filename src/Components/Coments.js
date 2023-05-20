
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
const Coments = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res)=>{
        console.log(res.data)
        setData(res.data);
       })
    },[])
    return(
        <>
        <h1>{id}</h1>
        <table>
        <thead>
          <tr>
          <th> Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
        
        {// eslint-disable-next-line
          data.map((elem,idx) => {
              return(
                <tr key={idx}>
                  <td>{elem.id}</td>
                  <td>{elem.postId}</td>
                  <td>{elem.name}</td>
                  <td>{elem.email}</td>
                  
                </tr>
              )
              
          })
        }
        </tbody>
      </table>
        </>
    )
}

export default Coments