import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

export default function AddCountryButton() {
  const textColor = useColorModeValue("white", "brand.500");

  const bgColor = useColorModeValue("brand.500", "white");

  function AddCountryButton() {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) '
      />
    )
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
      <>
        <Button
          onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
          size="md"
          bg={bgColor}
          color={textColor}
          leftIcon={<MdAdd />}
        >
          Add Country
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
          <ModalContent>
            <ModalHeader>Add Country</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              FORM:
              <br />
              Content here
            </ModalBody>

            <ModalFooter>
              <Button bg={bgColor} color={textColor}  onClick={onClose}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return <AddCountryButton />;
}
