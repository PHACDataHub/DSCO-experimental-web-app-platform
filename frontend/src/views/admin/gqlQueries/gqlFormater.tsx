import React from "react";

import {
  Box,
  Center,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type SetItemProps = {
  countryCode: string;
  countryName: string;
};

export default function GQLFormater({
  countryCode,
  countryName,
}: SetItemProps) {
  return (
    <>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        <Box
          bg="black"
          display={"inline-block"}
          px={2}
          py={1}
          color="white"
          mb={2}
        >
          <Text fontSize={"xs"} fontWeight="medium">
           {countryCode}
          </Text>
        </Box>
        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
        {countryName}
        </Heading>
        <Text color={"gray.500"} noOfLines={2}>
          More info Here
        </Text>
      </Box>
    </>
  );
}
