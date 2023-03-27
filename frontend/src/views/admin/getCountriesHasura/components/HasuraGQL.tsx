
import { useEffect, useState } from "react";

// Chakra imports
import { HStack, Select, SimpleGrid } from "@chakra-ui/react";

import CountryCardHasura from "./CountryCardHasura";

// query is the query create
const query = `
{
  backend_country(order_by: {country_name: asc}) {
    country_name
    country_code
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

type SetItemProps = {
  country_name: string; 
  country_code: string; 
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  growth?: string | number;
  filter: string;
}

function GetAllCountryCardsHasura({ filter }: SetItemProps) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:8080/v1/graphql`,
      opts
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
      console.log(data);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  const viewAllItems = data.data.backend_country.map((itemItems: 
    { country_name: any; country_code: any; }) => {return(
 <CountryCardHasura key={data.data.backend_country.country_code}
    {...itemItems}        
    />
    )}
  )

  const viewFilteredItem = data.data.backend_country
  .filter((itemItems: { country_name: string; }) => itemItems.country_name === filter)
    .map(
      (itemItems: {
        filter: string;
        country_name: string;
        country_code: string;
      }) => {
        return (
          <>
            <CountryCardHasura {...itemItems}  key={data.data.backend_country.country_code}/>
          </>
        );
      }
    );



  return (
<>
<SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "2xl": 5 }}
          gap="20px"
          mb="20px"
        >
          {/* If the drop down is empty then the filter prop has the value of {""} */}
          {/* If fitler props = "" then this will display all cards. If filter prop is given a countryName, then the filter will apply and only show the selected countryName */}
          {filter === "" ? <>{viewAllItems}</> : <> {viewFilteredItem}</>}
        </SimpleGrid>
</>
  );
}


export default function FilterCardsHasura() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode] = useState("");
  
  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:8080/v1/graphql`,
      opts
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
      console.log(data);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <>

      <HStack>
        <Select
          placeholder="Select Country Name"
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        >

{data.data.backend_country.map((itemItems: 
    { country_name: any; country_code: any; }) =>(
            <option
              key={itemItems.country_code}
              // What is displayed in the card *
              value={itemItems.country_name}
            >
              {/*
        Whats in the list drop down
        What is passed to the selectedCountry
        */}
              {itemItems.country_name}
            </option>
          ))}
        </Select>
      </HStack>
      <br />
      <hr />
      <br />
      <GetAllCountryCardsHasura
        filter={selectedCountry}
        country_code={selectedCountryCode}
        country_name={selectedCountry}
      />
    </>
  );
}

