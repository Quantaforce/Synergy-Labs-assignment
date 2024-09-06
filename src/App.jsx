import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data,setData]=useState(null);
  async function getData(){
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const fres=await res.json();
    setData(fres);
    console.log(fres);
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className='text-foreground font-mono'>
      <table className='border-black'>
        <tr className='text-left'>
          <th className='px-4 py-1'>Name</th>
          <th className='px-4 py-1'>Email</th>
          <th className='px-4 py-1'>Phone</th>
          <th className='px-4 py-1'>Profile</th>
        </tr>
        {data &&
          data.map((val,key)=>{
            return <tr key={key}>
              <td className='px-2'>{val.name}</td>
              <td className='px-2'>{val.email}</td>
              <td className='px-2'>{val.phone}</td>
              <td className='px-2'><a>View Profile</a></td>
            </tr>
          })
        }
      </table>
    </div>
  )
}

export default App
