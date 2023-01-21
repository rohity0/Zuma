import { Box, Text } from "@chakra-ui/react"
import { Navbar } from "../Components/Navbar"



export const Home = ()=>{

    return(
        <>
           <Navbar />
           {/* create task here */}
        <Box m="auto" w="75%" border={"1px solid"} >
              <Text as="h2"  textAlign={"center"} fontSize="25px" fontWeight={500}> Create Task Here</Text>
               <form>
                    

               </form>
        </Box>

        </>
    )
}