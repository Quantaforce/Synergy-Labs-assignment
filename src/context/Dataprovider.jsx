import { createContext,  useState } from "react";

export const datacontext=createContext("");
export function Dataprovider({children}){
  const [data,setData]=useState(null);
  const [id,setId]=useState(11);
  return <datacontext.Provider value={{data,setData,id,setId}}>
    {children}
  </datacontext.Provider>
}
