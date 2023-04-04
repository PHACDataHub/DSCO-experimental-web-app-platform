import React, { useEffect, useState } from "react";

import { gql, useQuery, useMutation } from "@apollo/client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  useDisclosure,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { GETALLCOUNTRIES } from "./hasura/HasuraGQL"; 

// DO NOT DELETE
// These are coming up "Module '"@chakra-ui/react"' has no exported member <modal/modal Type>". These do exsist and work
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export type cities = {
  country_capital: any;
  country_code: any;
  country_code2: any;
  country_continent: any;
  country_governmentform: any;
  country_headofstate: any;
  country_indepyear: any;
  country_lifeexpectancy: any;
  country_localname: any;
  country_name: any;
  country_population: any;
  country_region: any;
  country_surfacearea: any;
};

const GET_DATA = gql`
  query MyQuery {
    backend_country(where: { country_name: { _eq: "required" } }) {
      country_capital
      country_code
      country_code2
      country_continent
      country_governmentform
      country_headofstate
      country_indepyear
      country_lifeexpectancy
      country_localname
      country_name
      country_population
      country_region
      country_surfacearea
    }
  }
`;

const ADD_COUNTRY = gql`
  mutation MyMutation(
    $country_code: String!
    $country_code2: String!
    $country_continent: String!
    $country_governmentform: String!
    $country_localname: String!
    $country_name: String!
    $country_population: Int!
    $country_region: String!
    $country_surfacearea: float8!
  ) {
    insert_backend_country(
      objects: {
        country_name: $country_name
        country_code: $country_code
        country_continent: $country_continent
        country_region: $country_region
        country_surfacearea: $country_surfacearea
        country_population: $country_population
        country_localname: $country_localname
        country_governmentform: $country_governmentform
        country_code2: $country_code2
      }
    ) {
      affected_rows
    }
  }
`;

export default function AddCountryButton() {
  // API useMutation Consts
  const { loading, error, data } = useQuery(GET_DATA);
  const [
    createCountry,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(ADD_COUNTRY, { refetchQueries : [ {query: GETALLCOUNTRIES }]});
  const [country_code, set_country_code] = useState<string>("");
  const [country_code2, set_country_code2] = useState<string>("");
  const [country_continent, set_country_continent] = useState<string>("");
  const [country_governmentform, set_country_governmentform] = useState<string>("");
  const [country_localname, set_country_localname] = useState<string>("");
  const [country_name, set_country_name] = useState<string>("");
  const [country_population, set_country_population] = useState<string>("");
  const [country_region, set_country_region] = useState<string>("");
  const [country_surfacearea, set_country_surfacearea] = useState<string>("");

  // CSS consts
  const textColor = "white";
  const bgColor = "brand.500";

  // Modal consts
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);


  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (loading) return <p>Loading</p>;

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        size="md"
        bg={bgColor}
        color={textColor}
        leftIcon={<MdAdd />}
      >
        Add Country
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Country</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel htmlFor="country_name"> country_name :</FormLabel>
              <Input
                id="country_name"
                type="text"
                placeholder="country_name"
                value={country_name}
                required
                onChange={(event: any) => {
                  set_country_name(event.target.value);
                }}
              />
              <FormLabel htmlFor="country_code"> country_code :</FormLabel>
              <Input
                id="country_code"
                type="text"
                maxLength={3}
                placeholder="NLD"
                value={country_code}
                required
                onChange={(event: any) => {
                  set_country_code(event.target.value);
                }}
              />

              <FormLabel htmlFor="country_code2"> country_code2 :</FormLabel>
              <Input
                id="country_code2"
                type="text"
                maxLength={2}
                placeholder="NL"
                value={country_code2}
                required
                onChange={(event: any) => {
                  set_country_code2(event.target.value);
                }}
              />

              <FormLabel htmlFor="country_continent">
                country_continent :
              </FormLabel>
              <Input
                id="country_continent"
                type="text"
                placeholder="country_continent"
                value={country_continent}
                required
                onChange={(event: any) => {
                  set_country_continent(event.target.value);
                }}
              />

              <FormLabel htmlFor="country_governmentform">
                {" "}
                country_governmentform :
              </FormLabel>
              <Input
                id="country_governmentform"
                type="text"
                placeholder="country_governmentform"
                value={country_governmentform}
                required
                onChange={(event: any) => {
                  set_country_governmentform(event.target.value);
                }}
              />

              <FormLabel htmlFor="country_localname">
                {" "}
                country_localname :
              </FormLabel>
              <Input
                id="country_localname"
                type="text"
                placeholder="country_localname"
                value={country_localname}
                required
                onChange={(event: any) => {
                  set_country_localname(event.target.value);
                }}
              />

              <FormLabel htmlFor="country_population">
                country_population :{" "}
              </FormLabel>
              <NumberInput max={9999999999} min={1}>
                <NumberInputField
                  id="country_population"
                  placeholder="1-9999999999"
                  value={country_population}
                  onChange={(event: any) => {
                    set_country_population(event.target.value);
                  }}
                />
              </NumberInput>

              <FormLabel htmlFor="country_region"> country_region :</FormLabel>
              <Input
                id="country_region"
                type="text"
                placeholder="country_region"
                value={country_region}
                required
                onChange={(event: any) => {
                  set_country_region(event.target.value);
                }}
              />

              <FormLabel htmlFor="country_surfacearea">
                country_surfacearea :{" "}
              </FormLabel>
              <NumberInput max={9999999999} min={1}>
                <NumberInputField
                  id="country_surfacearea"
                  placeholder="1-9999999999"
                  value={country_surfacearea}
                  onChange={(event: any) => {
                    set_country_surfacearea(event.target.value);
                  }}
                />
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={bgColor}
              color={textColor}
              type="submit"
              onClick={(event: any) => {
                event.preventDefault();
                //       console.log( "submitted", country_capital, country_code, country_code2, country_continent, country_governmentform, country_headofstate, country_indepyear, country_lifeexpectancy, country_localname, country_name, country_population, country_region, country_surfacearea, )
                if (!mutationError) {
                  // set_country_capital("")
                  // set_country_headofstate("")
                  // set_country_indepyear("")
                  // set_country_lifeexpectancy("")
                  set_country_code("");
                  set_country_code2("");
                  set_country_continent("");
                  set_country_governmentform("");
                  set_country_localname("");
                  set_country_name("");
                  set_country_population("");
                  set_country_region("");
                  set_country_surfacearea("");
                  alert("data uploaded");
                  onClose();
                }
                if (mutationError) {
                  alert(`${mutationError}`);
                }
                createCountry({
                  variables: {
                    //   country_capital : country_capital,
                    country_code: country_code,
                    country_code2: country_code2,
                    country_continent: country_continent,
                    country_governmentform: country_governmentform,
                    //   country_headofstate: country_headofstate,
                    //   country_indepyear : country_indepyear,
                    //   country_lifeexpectancy : country_lifeexpectancy,
                    country_localname: country_localname,
                    country_name: country_name,
                    country_population: country_population,
                    country_region: country_region,
                    country_surfacearea: country_surfacearea,
                  },
                });
              }}
              isDisabled={
                country_code === "" ||
                country_code2 === "" ||
                country_continent === "" ||
                country_governmentform === "" ||
                country_localname === "" ||
                country_name === "" ||
                country_population === "" ||
                country_region === "" ||
                country_surfacearea === ""
              }
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

