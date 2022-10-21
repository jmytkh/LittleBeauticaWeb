import DiscoverCard1 from "./DiscoverCard1";
import DiscoverCard2 from "./DiscoverCard2";
import DiscoverCard3 from "./DiscoverCard3";
import DiscoverCard4 from "./DiscoverCard4";
import DiscoverCard5 from "./DiscoverCard5";
import DiscoverCard6 from "./DiscoverCard6";
import DiscoverCard7 from "./DiscoverCard7";
import DiscoverCard8 from "./DiscoverCard8";

import {
    ChakraProvider,
    Box,Input,
    Text,
    Link,
    VStack, Spacer,
    Code,
    Grid,
    GridItem,
    theme,
    HStack
  } from '@chakra-ui/react';
function App() {
    return ( 
        <Box textAlign="center" fontSize="xl">
            <Grid
            templateAreas={`"top"
                                    "bottom"
                                `}
            gridTemplateRows={"1fr 5fr"}
            h="100vh"
            fontWeight="bold"
            >
                <GridItem pl="2" bg="pink.200" area={"top"} verticalAlign={'center'}>
                    <VStack spacing={1}>
                        <Text fontSize='2xl' h='50'>
                        Based on the Quiz Results, we would recommend
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem pl="2" bg="white" area={"bottom"}>
                    <VStack spacing={8}>
                        <Spacer/>
                    <HStack spacing='24px'>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard1/>
                    </Box>
                    <Box w='auto' h='auto'>
                    or
                    </Box>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard2/>
                    </Box>
                    </HStack>
                    <Box w='auto' h='auto' fontSize={'3xl'}>
                    Go ahead! Click on one to find out more
                    </Box>
                    </VStack>
                </GridItem>
            </Grid>
        </Box>

     );
}

export default App;