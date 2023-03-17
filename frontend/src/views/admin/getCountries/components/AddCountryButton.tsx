import React from "react";

import { Button, useColorModeValue } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

export default function AddCountryButton() {
  const textColor = useColorModeValue("white", "brand.500");

  const bgColor = useColorModeValue("brand.500", "white");

  return (
    <Button bg={bgColor} color={textColor} leftIcon={<MdAdd />}>
      Add Country
    </Button>
  );
}
