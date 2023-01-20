
import { createContext, useReducer, useState } from "react";
import axios from 'axios';

export const AppContext =  createContext();

const initalState ={
    token: "",
    data: [],
}


export const AppContextProvider = ({children})=>{
       const [state, dispatch] = useReducer(initalState);
    
       const handleSignup= async (data)=>{
          
               try{
                     return await  axios({
                        url: "http://localhost:8000/register",
                        method: "POST",
                        data: data
                     });          
               }catch(e){
                     console.log(e.message)
               }
       }

   
     return(
        <AppContext.Provider value={{handleSignup, }}>
            {children}
        </AppContext.Provider>
     )
  }