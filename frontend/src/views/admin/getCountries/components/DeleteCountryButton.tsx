import { useState } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  HStack,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { gql, useMutation } from "@apollo/client";
import { GETALLCOUNTRIES } from "./hasura/HasuraGQL";
import React from "react";
import { MdDelete } from "react-icons/md";

const DELETE_COUNTRY = gql`
mutation MyMutation($country_name: String!) {
    delete_backend_country(where: {country_name: {_eq: $country_name}}) {
      affected_rows
    }
  }
`;

type SetItemProps = {
  country_name: string;
};

export default function APIDeleteCountryButton({ country_name }: SetItemProps) {
  const [
    deleteCountry,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(DELETE_COUNTRY, {
    refetchQueries: [{ query: GETALLCOUNTRIES }],
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="red" 
      value={country_name}
      onClick={
        (event:any) => {onOpen() }}>
        <MdDelete />
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {country_name}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete {country_name}? You can't undo
              this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={
                    (event: any) => {
                        event.preventDefault();
                        onClose();
                        deleteCountry({
                  variables: { country_name: country_name },
                })
            }
        }
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
