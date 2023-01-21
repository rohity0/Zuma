import { Box, Button, Flex, FormControl, Grid, Input, Spacer, Stack, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { useContext, useEffect } from "react"
import { Navbar } from "../Components/Navbar"
import { AppContext } from "../Context/AppContext"



export const Home = ()=>{
   const {state, getTodo,dispatch , handlePost} = useContext(AppContext);
     const [todoPost, setTodoPost] = useState({
        title : "",
        description : "",
       })
      
const handleChnage=  (e)=>{
     const{name, value } = e.target;
      setTodoPost({
        ...todoPost,
        [name] : value
      })
}
  
const handleSubmit=(e)=>{
          e.preventDefault();
          handlePost(todoPost)
         


}
     useEffect(()=>{
          if(state.token){
            getTodo();
          }
     },[])

    return(
        <>
           <Navbar />
           {/* create task here */}
        <Box p="20px" m="auto" mt="25px" w="75%" border={"1px solid"} borderRadius="10px" >

              <form onSubmit={handleSubmit}>
                <Flex  mb="15px">
                  <Text as="h2"  textAlign={"center"} fontSize="25px" fontWeight={500}> Create Task Here</Text>
                  <Spacer />
                  <Button type="submit">
                    Create Task 
                  </Button>
                </Flex>
                
                <Box>
                   <FormControl mb="7px">
                      <Input isRequired onChange={handleChnage} value={todoPost.title} name="title" placeholder="Title . . . " />
                   </FormControl>
                  <FormControl>
                     <Textarea isRequired onChange={handleChnage}value={todoPost.description} name="description" h="100px" resize={"none"} placeholder="Type Here . . ." />
                  </FormControl>
                </Box>
            
               </form>
             
        </Box>
   
          {/* todo post */}
          <Grid  w="90%" m={"auto"} mt="25px"  templateColumns='repeat(3, 1fr)' gap="1.5rem"> 
                 <Box 
                 border="1px solid rgba(0,0,0,0.1)"
                 borderRadius="5px"
                 height="100px"
                 overflow="auto">
                        <Box backgroundColor="green.100" position="sticky" top="0" zIndex="1">
                            <Text textAlign="center" fontWeight="bold">
                            TODO
                            </Text>
                        </Box>
                 </Box>
                 <Box
                 border="1px solid rgba(0,0,0,0.1)"
                 borderRadius="5px"
                 height="100px"
                 overflow="auto"
                 >
                        <Box
                            backgroundColor="yellow.100"
                            position="sticky"
                            top="0"
                            zIndex="1"
                        >
                            <Text textAlign="center" fontWeight="bold">
                               IN-PROGRESS
                            </Text>
                        </Box>  
                 </Box>
                 <Box
                 border="1px solid rgba(0,0,0,0.1)"
                 borderRadius="5px"
                 height="100px"
                 overflow="auto" 
                 >
                    
                        <Box backgroundColor="blue.100" position="sticky" top="0" zIndex="1">
                            <Text textAlign="center" fontWeight="bold">
                              DONE
                            </Text>
                        </Box>
                 </Box>

               
          </Grid>

        </>
    )
}