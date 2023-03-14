import React from "react";
import {
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdMap } from 'react-icons/md';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';

type SetItemProps = {
  countryCode: string;
  countryName: string;
};

export default function CountryCard({
  countryCode,
  countryName,
}: SetItemProps) {

  const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <MiniStatistics
      startContent={
        <IconBox
          w='56px'
          h='56px'
          bg={boxBg}
          icon={<Icon w='32px' h='32px' as={MdMap} color={brandColor} />}
        />
      }
      name={countryCode}
      value={countryName}
    />
  );
}
