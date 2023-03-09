// Chakra imports
import {
  Box,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";


const Get_Query = gql`
  {getAllRegions(countryContinent: "North America"){
    countryCode 
    countryName}
  }  `;


function GQLFetchApp() {
  const [item, setItem] = useState([]);
  const { loading, error , data } = useQuery(Get_Query);

  useEffect(() => {
    if (data) {
      setItem(data.getAllRegions)
    }
    console.log(data);
  }, [data]);


  return (<>
  {item.map( (val) =>{
    return(
    <div><h1>{val.countryCode} : {val.countryName}</h1> </div>) 
  } )}
  </>)
}

export default function GQLQueryFetch() {
  // Chakra Color Mode

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      
        <GQLFetchApp  />

        <br/>
        <br/>
        <br/>
      
    </Box>
  );
}
