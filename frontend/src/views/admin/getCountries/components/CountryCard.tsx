import React from "react";
import {
  Flex,
  Icon,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { MdMap } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import Card from "components/card/Card";
import APIDeleteCountryButton from './DeleteCountryButton'

type SetItemProps = {
  country_code: string;
  country_name: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  growth?: string | number;
};

export default function CountryCard({
  country_code,
  country_name,
  startContent,
  growth,
}: SetItemProps) {
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <>
      <Card py="15px" key={country_code}>
        <Flex
          my="auto"
          h="100%"
          align={{ base: "center", xl: "start" }}
          justify={{ base: "center", xl: "center" }}
        >
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdMap} color={brandColor} />}
          />

          <Stat my="auto" ms={startContent ? "18px" : "0px"}>
            <HStack justify={"space-between"}>
            <StatLabel
              lineHeight="100%"
              color={textColorSecondary}
              fontSize={{
                base: "sm",
              }}
            >
              {country_code}
            </StatLabel>
            <APIDeleteCountryButton country_name={country_name} />
            </HStack>
            <StatNumber
              color={textColor}
              fontSize={{
                base: "2xl",
              }}
            >
              {country_name}
            </StatNumber>
            {growth ? (
              <Flex align="center">
                <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                  {growth}
                </Text>
                <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                  since last month
                </Text>
              </Flex>
            ) : null}
          </Stat>
        </Flex>
      </Card>
    </>
  );
}
