import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { datacontext } from "../context/Dataprovider";
import ProfileHeader from "../components/profileHeader";
function Profile(){
  const {data}=useContext(datacontext);
  const [user,setUser]=useState(null);
  const {userId}=useParams();
  const navigate=useNavigate();
  console.log('userid',userId);
  useEffect(()=>{
    const x=data.find((val)=>{
      if(val.id==userId){
        return val;
      }
    })
    setUser(x);
    console.log(x);
  },[])
  return(
    user!=null && 
    <>
      <ProfileHeader/>
      <div className="flex mt-14 justify-center items-center h-full">
        <div className="px-4 min-w-96 ">
            <div className="flex justify-between m-2">
              <p className="font-bold">Name</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div className="flex justify-between m-2">
              <p className="font-bold">Username</p>
              <p className="font-semibold">{user.username}</p>
            </div>
            <div className="flex justify-between m-2">
              <p className="font-bold">Email</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div className="flex justify-center mt-2">
              <button  onClick={()=>navigate(`/profiledetails/${userId}`)} className="bg-primary px-3 py-2 rounded">Detailed view</button>
            </div>
        </div>
      </div>
    </>
  )
 }
export default Profile;
