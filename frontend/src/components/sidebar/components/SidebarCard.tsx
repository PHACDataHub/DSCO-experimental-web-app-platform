import { Button, Flex, HStack, Image, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import logoWhite from 'assets/img/layout/logoWhite.png';

export default function SidebarDocs() {
	const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';
	const borderColor = useColorModeValue('white', 'navy.800');

	return (
		<Flex
			justify='center'
			direction='column'
			align='center'
			bg={bgColor}
			borderRadius='30px'
			me={{ base: '20px' }}
			position='relative'>
			<Flex direction='column' mb='12px' align='center' justify='center' px='15px' pt='40px'>
				<Text
					fontSize={{ base: 'lg', xl: '18px' }}
					color='white'
					fontWeight='bold'
					lineHeight='150%'
					textAlign='center'
					px='10px'
					mb='14px'>
					Thanks for using the
          DSCO-webapp
				</Text>
				<Text fontSize='14px' color={'white'} px='10px' mb='14px' textAlign='center'>
					Check out the following links to see all the things that this webapp can offer you!
				</Text>
			</Flex>
      <VStack spacing={-3}>
        <Link href='http://localhost:8000/admin'>
          <Button
            bg='whiteAlpha.300'
            _hover={{ bg: 'whiteAlpha.200' }}
            _active={{ bg: 'whiteAlpha.100' }}
            mb={{ sm: '16px', xl: '24px' }}
            color={'white'}
            fontWeight='regular'
            fontSize='sm'
            minW='185px'
            mx='auto'>
            Django Admin Portal
          </Button>
        </Link>
        <Link href='http://localhost:8000/graphql'>
          <Button
            bg='whiteAlpha.300'
            _hover={{ bg: 'whiteAlpha.200' }}
            _active={{ bg: 'whiteAlpha.100' }}
            mb={{ sm: '16px', xl: '24px' }}
            color={'white'}
            fontWeight='regular'
            fontSize='sm'
            minW='185px'
            mx='auto'>
            GraphQL API End-point
          </Button>
        </Link>
        <Link href='http://localhost:5433/browser'>
          <Button
            bg='whiteAlpha.300'
            _hover={{ bg: 'whiteAlpha.200' }}
            _active={{ bg: 'whiteAlpha.100' }}
            mb={{ sm: '16px', xl: '24px' }}
            color={'white'}
            fontWeight='regular'
            fontSize='sm'
            minW='185px'
            mx='auto'>
            PgAdmin / PostgreSQL
          </Button>
        </Link>
      </VStack>
		</Flex>
	);
}
