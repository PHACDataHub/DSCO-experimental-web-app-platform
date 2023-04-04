import React,{ useEffect, useState } from "react";

// Chakra imports
import { HStack, Select, SimpleGrid } from "@chakra-ui/react";

import { ApolloCache, ApolloQueryResult, DocumentNode, ObservableQuery, gql, useQuery, Cache } from "@apollo/client";

import CountryCard from "../CountryCard";
import AddCountryButton from "../AddCountryButton";

// query is the query create
export const GETALLCOUNTRIES = gql`
{
  backend_country(order_by: {country_name: asc}) {
    country_name
    country_code
  }
}
`;

type SetItemProps = {
  country_name: string;
  country_code: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  growth?: string | number;
  filter: string;
};

function GetAllCountryCardsHasura({ filter }: SetItemProps) {
  const { loading, error, data } = useQuery(GETALLCOUNTRIES);

  // useEffect(() => {    
  //   console.log(data);
  // }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  const viewAllItems = data.backend_country.map(
    (itemItems: { country_name: any; country_code: any }) => {
      return <CountryCard key={itemItems.country_code} {...itemItems} />;
    }
  );

  const viewFilteredItem = data.backend_country
    .filter(
      (itemItems: { country_name: string }) => itemItems.country_name === filter
    )
    .map(
      (itemItems: {
        filter: string;
        country_name: string;
        country_code: string;
      }) => {
        return (
          <>
            <CountryCard {...itemItems} key={itemItems.country_code} />
          </>
        );
      }
    )

  if (data && filter !== "")
    return (
      <>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, "2xl": 5 }}
          gap="20px"
          mb="20px"
        >
          {/* If the drop down is empty then the filter prop has the value of {""} */}
          {/* If fitler props does not = "", the filter will apply and only show the selected countryName */}
          {viewFilteredItem}
        </SimpleGrid>
      </>
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
        {viewAllItems}
      </SimpleGrid>
    </>
  );
}

export default function CountrySelector() {
  const [selectedCountryName, setSelectedCountry] = useState("");
  const [selectedCountryCode] = useState("");

  const { loading, error, data } = useQuery(GETALLCOUNTRIES);

  // useEffect(() => {    
  //   console.log(data);
  // }, []);
    
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;


  return (
    <>
      <HStack>
        <p>Filter by Country : </p>
        <Select
          placeholder="Select Country Name"
          onChange={(event:any) => {
            setSelectedCountry(event.target.value);
          }}
          w="400px"
        >
          {data.backend_country.map(
            (itemItems: { country_name: any; country_code: any }) => (
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
            )
          )}
        </Select>

        <p> Total Countries : {data.backend_country.length} </p>
        <AddCountryButton />
      </HStack>
      <br />
      <hr />
      <br />
      <GetAllCountryCardsHasura
        filter={selectedCountryName}
        country_code={selectedCountryCode}
        country_name={selectedCountryName}
        key={selectedCountryName}
      />
    </>
  );
}
