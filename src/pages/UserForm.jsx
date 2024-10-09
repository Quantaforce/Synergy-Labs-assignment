import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { datacontext } from "../context/Dataprovider";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import { UserSchema } from "../schema/userSchema";
import {zodResolver} from "@hookform/resolvers/zod"
function UserForm(){
  const {id,setId,data,setData}=useContext(datacontext);
  const [error,setError]=useState(null);
  const navigate=useNavigate();
  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(UserSchema)
  });
  const onsub=async (val)=>{
    try{
      val.id=id;
      const res=await fetch('https://jsonplaceholder.typicode.com/users/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(val)
      });
      console.log(res);
      if(!res.ok){
        throw new Error('http error occoured unable to create user')
      }

      setId(id+1);
      setData([...data,val])
      navigate('/users');
    }
    catch(err){
      setError(err.message);
    }
  }
  return (
    <div className="h-full flex justify-center items-center">
      <Form onsub={onsub} register={register} errors={errors} handleSubmit={handleSubmit}/>
      {error && <div className="text-red-500">{error}</div>}
    </div>
    

  )

}
export default UserForm;
