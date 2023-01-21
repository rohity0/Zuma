import {  Button, Flex, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "react-router-dom";
import { Logout } from "../Context/actionType";
import { AppContext } from "../Context/AppContext"


export const Navbar = ()=>{
   const {state, dispatch} = useContext(AppContext);
   const handleLogout = ()=>{
      console.log("log")
      dispatch({type: Logout})
   }
     return (
        <>
          <Flex gap="2rem" backgroundColor={"green.300"} boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} h="60px" justifyContent={"center"} alignItems="center">

            
               <Text w="700px" as="h2" fontSize={"25px"} fontWeight="700" textAlign={"center"}>
                        ToDo App..
                </Text>
                {
                  state.token? <Button onClick={handleLogout} color={"red"}>
                         Logout
                  </Button> : <Button>
                        <Link to="/login"> Login</Link>
                  </Button> 

                }
                 {
                  !state.token?  <Button>
                     <Link to="/signup"> Sign Up</Link>
                     </Button> : ""
                 }

          </Flex>
        </>
     )
}