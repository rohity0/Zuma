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
  } from '@chakra-ui/react'


export function UpdateTodoPost() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button colorScheme={"green"} onClick={onOpen}>Update</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input />
              <Textarea />
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