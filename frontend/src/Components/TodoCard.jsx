import { Badge, Button, Flex, Spacer, Text } from "@chakra-ui/react"
import { UpdateTodoPost } from "./EditTodoPost"

export const TodoCard = ({title, description, todoStatus , _id})=>{
     return (
         <>
                                   <Text
                                     mb="5px"
                                     fontSize={"19px"} fontWeight={"600"}
                                   >
                                     Title :   <Text as="span">{title}</Text>
                                    </Text> 
                                     <Badge mb="15px">
                                      {todoStatus}
                                     </Badge>
                                     <hr  border="1px solid rgba(0,0,0,0.1)" />
                                      <Text mb="7px" fontSize={"19px"} fontWeight={"600"}>Description </Text>                                     
                                     <Text>
                                         {
                                          description
                                         }
                                      </Text> 

                                      <Flex mt="15px">
                                        <UpdateTodoPost
                                         key={_id} 
                                         title ={title}
                                         description ={description}
                                         todoStatus ={todoStatus}
                                        />
                                         <Spacer />
                                         <Button colorScheme={"red"}>
                                                       Delete
                                         </Button>
                                      </Flex>
        </>
     )
}