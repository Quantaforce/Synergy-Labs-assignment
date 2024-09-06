import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { datacontext } from "../context/Dataprovider";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "../components/Form";
import ProfileHeader from "../components/profileHeader";
function EditForm(){
  const {userId}=useParams();
  const {data,setData}=useContext(datacontext);
  const [error,setError]=useState(null);
  const oldData=data.find((val)=>{
    if(val.id==userId)
      return val;
  });
  const navigate=useNavigate();
  const {register,handleSubmit}=useForm({
      defaultValues:oldData
    
  });
  const onsub=async (val)=>{
    try{
      const res=await fetch('https://jsonplaceholder.typicode.com/users/',{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(val)
      });
      //cannot have put request on the this api
      /*if(!res.ok){
        throw new Error('HTTP error unable to modify user try again later')
      }*/
      const newdata=data.map((datavalue)=>{
        if(datavalue.id==userId)
          return val;
        else
          return datavalue;
      })
      setData(newdata);
      navigate('/users');
    }
    catch(err){
      setError(err.message);
    }
  }
  return (
    <>
      <ProfileHeader/>
      <div className="h-full">
      <div className="flex justify-center mt-14 items-center">
        <Form onsub={onsub} register={register} handleSubmit={handleSubmit}/>
      </div>
        {error!=null && <div className=" text-center text-red-400">{error}</div>}
      </div>
    </>
  )

}
export default EditForm;
