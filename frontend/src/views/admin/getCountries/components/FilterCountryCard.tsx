// Chakra imports
import { useEffect, useState } from "react";

import { HStack, Select, SimpleGrid } from "@chakra-ui/react";

import { gql, useQuery } from "@apollo/client";
import CountryCard from "./CountryCard";
import AddCountryButton from "./AddCountryButton";

const GET_ALL_COUNTRIES_QUERY = gql`
  {
    getAllRegions(countryContinent: "North America") {
      countryCode
      countryName
    }
  }
`;

// Drop down bar and filter prop for the cards
// the fitler prop is passed to the getAllCountryCards
// filter is set using the countryName
export default function FilterCards() {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES_QUERY);
  const [item, setItem] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode] = useState("");

  useEffect(() => {
    if (data) {
      setItem(data.getAllRegions);
    }
    // console.log(data);
  }, [data]);

  if (data)
    return (
      <>
        {/* {JSON.stringify(item)} */}
        <HStack>
          <Select
            placeholder="Select Country Name"
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
          >
            {item.map((itemItem) => (
              <option
                key={itemItem.countryCode}
                // What is displayed in the card *
                value={itemItem.countryName}
              >
                {/*
          Whats in the list drop down
          What is passed to the selectedCountry
          */}
                {itemItem.countryName}
              </option>
            ))}
          </Select>

          <AddCountryButton />
        </HStack>
        <br />
        <hr />
        <br />
        <GetAllCountryCards
          filter={selectedCountry}
          countryCode={selectedCountryCode}
          countryName={selectedCountry}
        />
      </>
    );
  if (loading) return <> {"Submitting..."}</>;
  if (error) return <> {`Submission error! ${error.message}`}</>;
  else return <></>;
}

type SetItemProps = {
  countryCode: string;
  countryName: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  growth?: string | number;
  filter: string;
};

// The filter prop from the FilterCards will be passed into the const viewFilteredItem
// Appearance of the card is defined in the CountryCards.tsx file
// GET_ALL_COUNTRIES_QUERY is called in and mapped.
// The display is either all ofthe mapped items or just the item that has been selected by the drop down bar
function GetAllCountryCards({ filter }: SetItemProps) {
  const [item, setItem] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES_QUERY);

  useEffect(() => {
    if (data) {
      setItem(data.getAllRegions);
    }
  }, [data]);

  const viewAllItems = item.map(
    (itemItems: { countryCode: string; countryName: string }) => {
      return (
        <>
          <CountryCard {...itemItems} />
        </>
      );
    }
  );

  const viewFilteredItem = item
    .filter((itemItems) => itemItems.countryName === filter)
    .map(
      (itemItems: {
        filter: string;
        countryCode: string;
        countryName: string;
      }) => {
        return (
          <>
            <CountryCard {...itemItems} />
          </>
        );
      }
    );

  if (data)
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
  if (loading) return <> {"Submitting..."}</>;
  if (error) return <> {`Submission error! ${error.message}`}</>;
  else return <></>;
}
