import { GetTodo, LoginSuccess, Logout } from "./actionType"


export const reducer = ( state, {type, payload})=>{
   
         switch(type){

                case LoginSuccess:
                        localStorage.setItem("tokenKey",JSON.stringify(payload.token))
                     return{
                               ...state,
                             token : payload.token   };

                case  Logout:
                  localStorage.removeItem("tokenKey")
                  return {
                ...state,
                token : ""
                };

                case GetTodo:return {
                      ...state, 
                      data: payload.data
                }
                default: return state
         }
}