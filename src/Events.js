import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    GridItem, Image,
    theme,
    HStack,
    Spacer,
  } from '@chakra-ui/react';

import eventimage from "./event1.jpeg";
function App() {
    return (      
    <Box textAlign="center" fontSize="xl">
    <Grid
      templateAreas={`"top"
                            "bottom"
                        `}
      gridTemplateRows={"1fr 5fr"}
      h="150vh"
      fontWeight="bold"
    >
        <GridItem pl="2" bg="pink.100" area={"top"}>
            <VStack spacing={8}>
              <Spacer/>
                <Text textColor={'pink.900'} fontSize='md'>
                Our brief was to create a stand-out roadshow solution to offer customers with a wide range of products and allow them to choose the correct products that match their needs and budget.
                <p/>
                We also wish to educate customers on skincare health and wellbeing and raise awareness of real beauty
                <p/>
                The event solution was visiting several locations so it had to set up quickly and, of course, pink!
                </Text>
            </VStack>
        </GridItem>
        <GridItem pl="2" bg="pink.50" area={"bottom"} >
            <VStack spacing={8}>
                <HStack spacing={8}>
            <Box boxSize='sm'>
                <Image src={eventimage} h='xs'/>
                </Box>
                <Box
                mt='1'
                fontSize={'lg'}
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                textAlign = 'left'
                textColor={'pink.800'}
                >
                Little Beautica Pop-Up
                <p/>
Discover how Little Beautica can help you find your favourite skincare solution and save money at the same time.
<p/>
From 6 - 26 November, enjoy a free flower bouquet with any purchase.
<p/>
EVENT DETAILS
<p/>
Date: 6 - 26 November
<p/>
Time: 11am to 10pm.
<p/>
Location: ION Orchard Event Mezzanine
                
            </Box>
            </HStack>
            </VStack>
        </GridItem>
    </Grid>
  </Box>
);}



export default App;