import { Box, Button, Flex, FormControl, Grid, Input, Spacer, Stack, Text, Textarea } from "@chakra-ui/react"
import { Navbar } from "../Components/Navbar"



export const Home = ()=>{

    return(
        <>
           <Navbar />
           {/* create task here */}
        <Box p="20px" m="auto" mt="25px" w="75%" border={"1px solid"} borderRadius="10px" >

              <form>
                <Flex  mb="15px">
                  <Text as="h2"  textAlign={"center"} fontSize="25px" fontWeight={500}> Create Task Here</Text>
                  <Spacer />
                  <Button type="submit">
                    Create Task 
                  </Button>
                </Flex>
                
                <Box>
                   <FormControl mb="7px">
                      <Input placeholder="Title . . . " />
                   </FormControl>
                  <FormControl>
                     <Textarea h="100px" resize={"none"} placeholder="Type Here . . ." />
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