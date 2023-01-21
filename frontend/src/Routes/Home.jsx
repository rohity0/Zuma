import { Badge, Box, Button, Flex, FormControl, Grid, Input, Spacer, Stack, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { useContext, useEffect } from "react"
import { Navbar } from "../Components/Navbar"
import { GetTodo } from "../Context/actionType"
import { AppContext } from "../Context/AppContext"



export const Home = ()=>{
   const {state, getTodo,dispatch , handlePost} = useContext(AppContext);
     const [todoPost, setTodoPost] = useState({
        title : "",
        description : "",
       })
      
      //  console.log(state.data, "home")
     state.data?.filter((item)=> item.todoStatus =="pending");
       

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
          getTodo().then((res)=>{
            dispatch({type: GetTodo, payload: {data:res.data}});
            })
        }


     useEffect(()=>{
          if(state.token){
            getTodo().then((res)=>{
                dispatch({type: GetTodo, payload: {data:res.data}});
               
            })
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
                 height="90vh"
                 overflow="auto">
                        <Box backgroundColor="green.100" position="sticky" top="0" zIndex="1">
                            <Text textAlign="center" fontWeight="bold">
                            TODO
                            </Text>
                        </Box> 
                        {
                           state.data?.filter((item)=> item.todoStatus =="pending").map((el)=>{
                               return  <Box
                                 width="90%"
                                 boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
                                 margin="0.5rem auto 1rem"
                                 padding="15px"
                                >
                                   <Text 
                                     mb="5px"
                                     fontSize={"19px"} fontWeight={"600"}
                                   >
                                     Title :   <Text as="span">{el.title}</Text>
                                    </Text> 
                                     <Badge>
                                      {el.todoStatus}
                                     </Badge>
                                      <Text mb="7px" fontSize={"19px"} fontWeight={"600"}>Description </Text>
                                     <Text>
                                         {
                                          el.description
                                         }
                                      </Text> 

                                      <Flex mt="15px">
                                         <Button colorScheme={"green"}>
                                                     Update
                                         </Button>
                                         <Spacer />
                                         <Button colorScheme={"red"}>
                                                       Delete
                                         </Button>
                                      </Flex>
                                </Box>
                           })
                          
                        }

                 </Box>
                 <Box
                 border="1px solid rgba(0,0,0,0.1)"
                 borderRadius="5px"
                 height="90vh"
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
                 height="90vh"
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