import { GetTodo, LoginSuccess, Logout } from "./actionType"


export const reducer = ({type, action})=>{
         switch(type){
            
                case LoginSuccess:return{
                    
                };

                case  Logout:return {
                    
                };

                case GetTodo:return {
                    
                }
                default: return state
         }
}