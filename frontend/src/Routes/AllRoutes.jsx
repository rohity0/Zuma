import { Route, Routes } from "react-router-dom"
import { Login } from "../Components/Login"
import { Signup } from "../Components/SignUp"
import { Home } from "./Home"




export const AllRoutes = ()=>{

    return(
        <>
             <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/signup" element={<Signup />} />
                 <Route path="/login" element={<Login />} />
                </Routes>       
        </> 
    )
}