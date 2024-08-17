import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
function Userdemo(){
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=>{
        setUsers(data);
        setLoading(false);
      })
      .catch(error=>{
        console.error("if its not loadind,error occurs");
        setLoading(false);
      })
  },[])
  if(loading){
    return<p>Loading</p>
  }
  return(
    <div>
      <h1>List out the Users</h1>
      <ul>
        {users.map(user =>(
          <li key={user.id}>{user.name}</li>
          ))}
      </ul>
    </div>
  )
}
ReactDom.render(<Userdemo/>,document.getElementById('root'));