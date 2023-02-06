import { createContext, useReducer, useState } from "react";
import axios from 'axios';
import { reducer } from "./reducer";

export const AppContext =  createContext();

const token = JSON.parse(localStorage.getItem("tokenKey")) || ""
const initalState ={
    token: token,
    data: [],
}

 const url=  process.env.REACT_APP_BACKEND_URL;

export const AppContextProvider = ({children})=>{
       const [state, dispatch] = useReducer(reducer,initalState);
    //   console.log(state);

       const handleSignup= async (data)=>{
          
               try{
                     return await  axios({
                        url: `${url}/register`,
                        method: "POST",
                        data: data
                     });          
               }catch(e){
                     console.log(e.message)
               }
       };
  
       const hanldeLogin =  async (data)=>{
            try{
                return  axios({
                    url: `${url}/login`,
                    method : "post",
                    data : data
                  })
               }
            catch(e){
                console.log(e.message)
            }
       };
   
    const getTodo = async()=>{
      
      try{
        return await axios.get(`${url}/todo`, {
                                headers: {token : state.token}
                        })
  
      }catch(e){
        console.log(e.message)
      }
    }

    const handlePost = async(data)=>{
           try{
               let   res = await axios({
                  url :`${url}/todo`,
                  method : "Post",
                  data: data,
                  headers: {token : state.token}
               });
               // console.log(res.data)
           }catch(e){
               console.log(e.message)
           }
    }

    const handlePatchPost = async(id,data)=>{
          try{
               await axios({
                url :`${url}/todo/${id}`,
                method : "patch",
                data: data,
                headers: {token : state.token}
             });
              return  getTodo();

          }catch(e){
             console.log(e.message)
          }
    }

    const deleteTodo = async(id)=>{
         try{
            await axios({
                url :`${url}/todo/${id}`,
                method : "delete",
                headers: {token : state.token}
             });
              return  getTodo();

         }catch(e){
            console.log(e.message)
         }
    }

     return(
        <AppContext.Provider value={{state, handleSignup, hanldeLogin,deleteTodo, dispatch ,handlePost, getTodo , handlePatchPost }}>
            {children}
        </AppContext.Provider>
     )
  }