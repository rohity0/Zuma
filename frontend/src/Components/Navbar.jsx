import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react"


export const Navbar = ()=>{
     return (
        <>
          <Flex boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"} h="60px" justifyContent={"center"} alignItems="center">

            
               <Text w="700px" as="h2" fontSize={"25px"} fontWeight="700" textAlign={"center"}>
                        ToDO App..
                </Text>
                 
                 
                 <Button>
                    Login
                </Button>
          
            
                
          </Flex>
        </>
     )
}