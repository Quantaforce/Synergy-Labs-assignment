import { useNavigate } from "react-router-dom";
import { useContext,useEffect, useState } from "react";
import { datacontext } from "../context/Dataprovider";
import { MdDelete,MdModeEditOutline  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
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
    <div className='text-foreground h-full mt-5 font-mono mb-12'>
      <table className="mx-auto w-full my-auto">
        <tr className='text-left bg-slate-900 w-full'>
          <th className='border-b border-border'>Id</th>
          <th className='border-b border-border'>Name</th>
          <th className='border-b border-border'>Email</th>
          <th className='border-b border-border'>Phone</th>
          <th className='border-b border-border'>Profile</th>
          <th colSpan="2" className='px-2 py-1 border-b border-border'>Actions</th>
        </tr>
        {data!=null &&
          data.map((val,key)=>{
            return <tr key={key} className="text-sm odd:bg-blue-950 even:bg-blue-900 ">
              <td data-cell='ID' className='border-b border-border'>{val.id}</td>
              <td data-cell='Name' className=' border-b border-border'>{val.name}</td>
              <td data-cell='Email' className='border-b border-border'>{val.email}</td>
              <td data-cell='Phone' className='border-b border-border'>{val.phone}</td>
              <td data-cell='Profile' className='border-b border-border hover:cursor-pointer' onClick={()=>navigate(`/profile/${val.id}`)}><a className=""><CgProfile size={25}/></a></td>
              <td data-cell="Edit" onClick={()=>{navigate(`/edit/${val.id}`)}} className='font-bold border-b border-border text-primary hover:cursor-pointer'><MdModeEditOutline size={25} /></td>
              <td data-cell="Delete" onClick={()=>{deleteUser(val.id)}} className='border-b border-border hover:cursor-pointer text-red-500 '><MdDelete  size={25}/></td>
            </tr>
          })
        }
      </table>
      {error!=null && <div>{error}, Please Refresh the page or try again later</div>}
    </div>
  )
}
export default Table;
