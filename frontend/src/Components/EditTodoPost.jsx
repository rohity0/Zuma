import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Textarea,
    Select,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
import { useState } from 'react'


export function UpdateTodoPost({title, description, todoStatus}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const  [editTodo , setEditTodo] = useState({
          title: title,
          description : description,
          todoStatus: todoStatus
    })

    const handleChange = (e)=>{
         const {name, value} = e.target;

          setEditTodo({
            ...editTodo,
            [name] : value
          })
    }

    return (
      <>
        <Button colorScheme={"green"} onClick={onOpen}>Update</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <form action="">

                <FormControl mb="15px">
                    <FormLabel>Title</FormLabel>
                    <Input onChange={handleChange} name="title" value={editTodo.title} placeholder='title' />
                </FormControl>
                <FormLabel>Status</FormLabel>
                <Select onChange={handleChange} name='todoStatus' value={editTodo.todoStatus} mb="10px"  placeholder='Status'>
                     <option value='pending'>Pending</option>
                     <option value='inprogress'>In Progress</option>
                     <option value='done'>Done</option>
                </Select> 
                

              <Textarea onChange={handleChange} resize={"none"} name="description" value={editTodo.description} placeholder='description'/>
                </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme={"green"}>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }