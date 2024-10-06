import { useContext } from "react";
import { useParams } from "react-router-dom";
import { datacontext } from "../context/Dataprovider";
import ProfileHeader from "../components/profileHeader";
function DetailedProfile(){
  const {userId}=useParams();
  const {data}=useContext(datacontext);
  const user=data.find((val)=>{
    if(val.id==userId)
      return val;
  })
  return (
    <div className="h-full">
    <ProfileHeader/>
    <div className="h-full flex items-center justify-center ">
      <div className="px-4 min-w-80 ">
          <div className="flex justify-between border-b">
            <p className="font-bold">Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">Username</p>
            <p className="font-semibold">{user.username}</p>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">Phone</p>
            <p className="font-semibold">{user.phone}</p>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">website</p>
            <a className="font-semibold" href={`https://www.${user.website}`} target='_blank'>{user.website}</a>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">ID</p>
            <p className="font-semibold">{user.id}</p>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">address</p>
            <p className="font-semibold">{user.address.suite}, {user.address.street}</p>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">zipcode</p>
            <p className="font-semibold">{user.address.zipcode}</p>
          </div>
          <div className="flex justify-between border-b">
            <p className="font-bold">Company</p>
            <p className="font-semibold">{user.company.name}</p>
          </div>

      </div>
    </div>
    </div>
  )

}
export default DetailedProfile;
