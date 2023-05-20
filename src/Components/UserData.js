import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserData = () => {
    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState([]);
    const [page, setPage] = useState(2);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_end=100').then(
           (response)=>{
            setUserData(response.data);
            console.log(response.data)
           }
        )
        // eslint-disable-next-line
    },[]);

    const selectPageH =(selectPage) =>{
        if(selectPage >= 1 && 
            selectPage <= userData.length / 10 &&
            selectPage !== page ) 
        setPage(selectPage);
    }
    return(
        <div>
        <h1> search the User Data</h1>
        <input type="text" onChange={e =>setSearch(e.target.value)} placeholder="Enter Name"/>

        <table className="table">
          <thead>
            <tr>
            <th> Id</th>
            <th>User Id</th>
            <th>Title</th>

            </tr>
          </thead>
          <tbody>
          
          {// eslint-disable-next-line
            userData.slice(page * 10 - 10, page * 10).filter((ele) => {
            if(search === " "){
                return ele
            }else if(ele.title.toLowerCase().includes(search)){
                return ele.title
            }
          }).map((elem,idx) => {
                return(
                  
                  <tr onClick={()=>navigate(`/comments/${elem.id}/`)} key={idx}>
                  
                    <td>{elem.id}</td>
                    <td>{elem.userId}</td>
                    <td>{elem.title}</td>
                    
                  </tr>
                  
                )
                
            })
          }
          </tbody>
        </table>
        {userData.length > 0 && <div className="pagination">
          <span  onClick={()=> selectPageH(page - 1)} > ⬅️</span>
          {[...Array(userData.length/10)].map((_,i)=>{return <span className={page === i+1 ?"s":""} onClick={()=> selectPageH(i+1)}>{i+1}&nbsp;</span>})}
          <span  onClick={()=> selectPageH(page + 1)}> ➡️</span>
        
        </div>}
        </div>
    )
}

export default UserData;