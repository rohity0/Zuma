import { useState } from "react";
import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { LoginSuccess } from "../Context/actionType";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Login = ()=>{
    const {hanldeLogin,dispatch} = useContext(AppContext);
    const navigate= useNavigate()
    const [userLogin, setUserLogin]  = useState({
         email: "",
        password : "",
     });
 

 const handleChange = (e)=>{
            const {name, value} = e.target
            setUserLogin({
                ...userLogin,
                [name] : value
            })
     }
const handleSubmit = (e)=>{
    e.preventDefault();
    hanldeLogin(userLogin).then((res)=>{
        if(res.data.error){
            alert(res.data.error)
        }else{
            dispatch({ type: LoginSuccess, payload:{token:res.data.token}})
            alert("User Logged in succefully ");
            navigate("/")
         }
    })
}

    return(
        <>
        <Navbar />
           <Box>
            
            <Box mt="100px" textAlign={"center"}>

                  <Text as="h1" fontSize={"20px"}>
                          Welcome Login Here !!

                  </Text>
            </Box  >
                 <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 10px"} borderRadius="10px" p="4%" m="auto" mt="70px" width={"45%"}>
                    <form onSubmit={handleSubmit}>
                       <Flex m="auto" w="70%" flexDirection={"column"} gap="0.5rem" alignItems={"center"} justifyContent={"center"}>

                      <FormControl>
                          <Input isRequired onChange={handleChange} value={userLogin.email} name="email" placeholder="Email" type={"text"} />
                      </FormControl>
                      <FormControl>
                          <Input  isRequired onChange={handleChange} value={userLogin.password} name="password" placeholder="Password" type={"password"} />
                      </FormControl>
                      <Button type="submit" w={"100%"} mt="10px"  >
                            Login
                         </Button>
                       </Flex>
                         
                         

                     </form>
                 </Box>
        </Box>
         
        </>
    )
}