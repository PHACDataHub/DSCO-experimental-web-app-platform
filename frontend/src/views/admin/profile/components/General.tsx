// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/admin/profile/components/Information';

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px' mb='4px'>
				General Information
			</Text>
			<Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
				Ben is a full-stack developer on the DSCO / Data Enablement team where he is
        the lead developer on the DSCO-webapp. This webapp is looking to solve the problem
        of having many teams and people not knowing where to start where they want to start
        developing, storing, and presenting their data/information to internal partners.
			</Text>
			<SimpleGrid columns={2} gap='20px'>
				<Information boxShadow={cardShadow} title='Organization' value='Public Health Agency of Canada (PHAC)' />
				<Information boxShadow={cardShadow} title='Department' value='Data Management, Innovation and Analytics (DMIA)' />
				<Information boxShadow={cardShadow} title='Education' value='Carleton University' />
				<Information boxShadow={cardShadow} title='Languages' value='English, Croatian' />
				<Information boxShadow={cardShadow} title='Personal Interests' value='Gaming, Coding, Swimming, Dancing' />
				<Information boxShadow={cardShadow} title='Birthday' value='15 Nov 1993' />
			</SimpleGrid>
		</Card>
	);
}
