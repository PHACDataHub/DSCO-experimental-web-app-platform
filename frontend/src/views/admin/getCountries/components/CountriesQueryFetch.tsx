// Chakra imports
import { Box, HStack, Select } from "@chakra-ui/react";
import { useState } from "react";
import FilterCards from "./graphene/GrapheneGQL";

import FilterCardsHasura from "./hasura/HasuraGQL";

//  Card appearance is defined by the GetAllCountryCards
//  Filtering and selection are done by the passing or props to the Selector Function
//  Add Button is in the AddCountryButoon.tsx

export default function CountriesQueryFetch() {
  const boxStyle = { pt: { base: "130px", md: "80px", xl: "80px" } };
  const [display, setDisplay] = useState('');
  const selector = (
    <>
      <HStack>
        <p>Select API: </p>
        <Select
          placeholder="Select option"          
          onChange={(e) => {
            setDisplay(e.target.value);
          }}
          w="250px"
        >
          <option value="hasura">Hasura</option>
          <option value="graphene">Graphene</option>
        </Select>
      </HStack>
      <br />
    </>
  );

  if (display === "hasura")
    return (
      <Box {...boxStyle}>
        {selector} <FilterCardsHasura />
      </Box>
    );
  if (display === "graphene")
    return (
      <Box {...boxStyle}>
        {selector} <FilterCards />{" "}
      </Box>
    );

  return (
    <>
      <Box {...boxStyle}>
        {selector}

      </Box>
    </>
  );
}
