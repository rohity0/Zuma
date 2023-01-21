import { Badge, Box, Button, Flex, Spacer, Text } from "@chakra-ui/react"

export const todoCards= ({title, description,todoStatus})=>{
     return(
            <Box
                                 width="90%"
                                 boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
                                 margin="0.5rem auto 1rem"
                                 padding="15px"
                                >
                                   <Text 
                                     mb="5px"
                                     fontSize={"19px"} fontWeight={"600"}
                                   >
                                     Title :   <Text as="span">{title}</Text>
                                    </Text> 
                                     <Badge>
                                      {todoStatus}
                                     </Badge>
                                      <Text mb="7px" fontSize={"19px"} fontWeight={"600"}>Description </Text>
                                     <Text>
                                         {
                                          description
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
        
     )
}