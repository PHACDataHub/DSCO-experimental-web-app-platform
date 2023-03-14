// Chakra imports
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import CountryCard from "./components/CountryCard";

const GET_ALL_COUNTRIES_QUERY = gql`
  {getAllRegions(countryContinent: "North America"){
    countryCode
    countryName}
  }  `;


function GetAllCountryCards() {
  const [item, setItem] = useState([]);
  const { loading, error , data } = useQuery(GET_ALL_COUNTRIES_QUERY);

  useEffect(() => {
    if (data) {
      setItem(data.getAllRegions)
    }
    console.log(data);
  }, [data]);


  return (<>
  {item.map( (value) =>{
    return(
    <CountryCard {...value} />
    )
  } )}
  </>)
}

export default function GQLQueryFetch() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 5 }} gap='20px' mb='20px'>
        <GetAllCountryCards  />
      </SimpleGrid>
    </Box>
  );
}
