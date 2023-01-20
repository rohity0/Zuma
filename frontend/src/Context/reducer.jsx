import { GetTodo, LoginSuccess, Logout } from "./actionType"


export const reducer = ( state, {type, payload})=>{
   
         switch(type){

                case LoginSuccess:return{
                             ...state,
                             token : payload.token
                    
                };

                case  Logout:return {
                    
                };

                case GetTodo:return {
                    
                }
                default: return state
         }
}