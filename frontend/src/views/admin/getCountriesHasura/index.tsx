// Chakra imports
import { Box } from "@chakra-ui/react";

import FilterCardsHasura from "../getCountriesHasura/components/HasuraGQL";

export default function HasuraQueryFetch() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Card appearance is defined by the GetAllCountryCards */}
      {/* Filtering and selection are done by the passing or props to the Selector Function */}
      {/* Add Button is in the AddCountryButoon.tsx */}
      <FilterCardsHasura />
    </Box>
  );
}
