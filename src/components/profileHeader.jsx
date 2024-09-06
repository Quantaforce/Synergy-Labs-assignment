import { NavLink, useParams } from "react-router-dom";

function ProfileHeader(){
  const {userId}=useParams();
  return <div className="min-h-12 z-50 bg-background top-0 fixed w-full flex items-center py-2 justify-center px-4">
    <ul className="flex flex-row">
      <li className="mx-3">
        <NavLink to={`/edit/${userId}`} className={({isActive})=> {
          return isActive?'text-purple-400':''
        }} >Edit</NavLink>
      </li>
      <li className="mx-3">
        <NavLink to={`/profile/${userId}`} className={({isActive})=> {
          return isActive?'text-purple-400':''
        }} >Profile</NavLink>
      </li>
      <li className="mx-3">
        <NavLink to={`/users`} className={({isActive})=> {
          return isActive?'text-purple-400':''
        }} >Users</NavLink>
      </li>
    </ul>
  </div>

}
export default ProfileHeader;
