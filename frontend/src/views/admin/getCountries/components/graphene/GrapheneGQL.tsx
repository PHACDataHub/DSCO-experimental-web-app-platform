import { useEffect, useState } from "react";

// Chakra imports
import { HStack, Select, SimpleGrid } from "@chakra-ui/react";

import CountryCard from "../CountryCard";

const grapheneEndpoint = "http://localhost:8000/graphql/";

const query = `
 {
  getAllRegions(country_continent: "North America"){
country_code
country_name
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};

type SetItemProps = {
  country_code: string;
  country_name: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  growth?: string | number;
  filter: string;
};

function GetAllCountryCards({ filter }: SetItemProps) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(grapheneEndpoint, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    // console.log(data);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  const viewAllItems = data.data.getAllRegions.map(
    (itemItems: { country_name: any; country_code: any }) => {
      return <CountryCard key={itemItems.country_code} {...itemItems} />;
    }
  );

  const viewFilteredItem = data.data.getAllRegions
    .filter(
      (itemItems: { country_name: string }) => itemItems.country_name === filter
    )
    .map(
      (itemItems: {
        filter: string;
        country_code: string;
        country_name: string;
      }) => {
        return (
          <>
            <CountryCard {...itemItems} key={itemItems.country_code} />
          </>
        );
      }
    );

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

export default function FilterCards() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCountryName, setSelectedCountry] = useState("");
  const [selectedCountryCode] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(grapheneEndpoint, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <>
      <HStack>
        <p>Filter by Country : </p>
        <Select
          placeholder="Select Country Name"
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
          w="400px"
        >
          {data.data.getAllRegions.map(
            (itemItems: { country_name: any; country_code: any }) => (
              <option
                key={itemItems.country_name}
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
        <p> Count : {data.data.getAllRegions.length} </p>
      </HStack>
      <br />
      <hr />
      <br />
      <GetAllCountryCards
        filter={selectedCountryName}
        country_code={selectedCountryCode}
        country_name={selectedCountryName}
        key={selectedCountryCode}
      />
    </>
  );
}
