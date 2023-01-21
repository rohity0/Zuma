import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { Navigate } from "react-router-dom";

export const  PrivateRoute = ({children})=>{
      
    const {state} = useContext(AppContext);
    console.log(state, "private");
    if(!state.token){
        console.log("private")
     return <Navigate to="/login" />
    }
     

    return  children
}