import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import Styles from "../Css/signup.module.css"

export const Signup  = ()=>{
     const { handleSignup } = useContext(AppContext);
     let [userDetails, setUserDetails]  = useState({
        name: "",
        email: "",
        password : "",
     });
     const  nav = useNavigate();


  
     const handleChange = (e)=>{
            const {name, value} = e.target
            setUserDetails({
                ...userDetails,
                [name] : value
            })
     }
    
     const handleSubmit = (e)=>{
        e.preventDefault();
             handleSignup(userDetails).then((res)=>{
                 alert(res.data.keyS);
                  nav("/login")
             })       
     }
  
    return(
        <Box>
            <Box mt="100px" textAlign={"center"}>
                  <Text as="h1" fontSize={"20px"}>
                          Welcome SignUp Here !!
                  </Text>
            </Box  >
                 <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 10px"} borderRadius="10px" p="4%" m="auto" mt="70px" width={"45%"}>
                    <form onSubmit={handleSubmit}>
                       <Flex m="auto" w="70%" flexDirection={"column"} gap="0.5rem" alignItems={"center"} justifyContent={"center"}>
                       <FormControl>
                          <Input isRequired onChange={handleChange} value={userDetails.name} name="name" placeholder="Name" type={"text"} />
                      </FormControl>
                      <FormControl>
                          <Input isRequired onChange={handleChange} value={userDetails.email} name="email" placeholder="Email" type={"text"} />
                      </FormControl>
                      <FormControl>
                          <Input  isRequired onChange={handleChange} value={userDetails.password} name="password" placeholder="Password" type={"password"} />
                      </FormControl>
                      <Button type="submit" w={"100%"} mt="10px"  >
                            Register
                         </Button>
                       </Flex>
                         
                         

                     </form>
                 </Box>
        </Box>
    )
}