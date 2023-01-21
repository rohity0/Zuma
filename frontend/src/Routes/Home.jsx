import { Box, Button, Flex, FormControl, Input, Spacer, Text, Textarea } from "@chakra-ui/react"
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

        </>
    )
}