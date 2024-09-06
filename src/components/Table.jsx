import { useNavigate } from "react-router-dom";
import { useContext,useEffect, useState } from "react";
import { datacontext } from "../context/Dataprovider";
function Table(){
  const {data,setData}=useContext(datacontext)
  const [error,setError]=useState(null);
  async function getData(){
    console.log('users');
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok){
      setError('failed to fetch user');
    }
    else{
      const fres=await res.json();
      setData(fres);
      console.log(fres);
    }
  }
  async function deleteUser(userId){
      try{
      const res=await fetch('https://jsonplaceholder.typicode.com/users/${userId}',{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
      });
      if(!res.ok){
        setError('failed to deleted user');
      }
      else{
      const newData=data.filter((val)=>{
        if(val.id!=userId)
          return val;
        })
      setData(newData);
      }
    }catch(error){
      setError(error);
    }
  }
  useEffect(()=>{
    if(data==null){
      getData();
    }
  },[])
  const navigate=useNavigate();
  return (
    <div className='text-foreground h-full mt-5 font-mono '>
      <table className="mx-auto my-auto">
        <tr className='text-left'>
          <th className='px-2 py-1 border-b border-border'>id</th>
          <th className='px-2 py-1 border-b border-border'>Name</th>
          <th className='px-2 py-1 border-b border-border'>Email</th>
          <th className='px-2 py-1 border-b border-border'>Phone</th>
          <th className='px-2 py-1 border-b border-border'>Profile</th>
        </tr>
        {data!=null &&
          data.map((val,key)=>{
            return <tr key={key} className="text-sm">
              <td className='px-2 border-b py-1 border-border'>{val.id}</td>
              <td className='px-2 border-b py-1  border-border'>{val.name}</td>
              <td className='px-2 border-b border-border'>{val.email}</td>
              <td className='px-2 border-b border-border'>{val.phone}</td>
              <td className='px-2 border-b border-border hover:cursor-pointer ' onClick={()=>navigate(`/profile/${val.id}`)}><a>View Profile</a></td>
              <td onClick={()=>{navigate(`/edit/${val.id}`)}} className='px-2 border-b border-border text-primary hover:cursor-pointer'>edit</td>
              <td onClick={()=>{deleteUser(val.id)}} className='px-2 border-b border-border hover:cursor-pointer text-red-500 '>delete</td>
            </tr>
          })
        }
      </table>
      {error!=null && <div>{error}, Please Refresh the page or try again later</div>}
    </div>
  )
}
export default Table;
