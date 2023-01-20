
import { createContext, useReducer, useState } from "react";
import axios from 'axios';
import { reducer } from "./reducer";

export const AppContext =  createContext();

const token = JSON.parse(localStorage.getItem("tokenKey")) || ""
const initalState ={
    token: token,
    data: [],
}


export const AppContextProvider = ({children})=>{
       const [state, dispatch] = useReducer(reducer,initalState);
      console.log(state);
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
  
       const hanldeLogin =  async (data)=>{
            try{
                return  axios({
                    url: "http://localhost:8000/login",
                    method : "post",
                    data : data
                  })
               }
            catch(e){
                console.log(e.message)
            }
       }
   
     return(
        <AppContext.Provider value={{handleSignup, hanldeLogin, dispatch }}>
            {children}
        </AppContext.Provider>
     )
  }