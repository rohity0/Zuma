import { Route, Routes } from "react-router-dom"
import { Signup } from "../Components/SignUp"
import Styles from "../Css/signup.module.css"



export const AllRoutes = ()=>{

    return(
        <>
             <Routes>
                 <Route className={Styles.signUp}path="/" element={<Signup />} />
                </Routes>       
        </>
    )
}