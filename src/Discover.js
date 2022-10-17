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
    Box,
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
                <GridItem pl="2" bg="pink.50" area={"top"}>
                    <VStack spacing={8}>
                        <Text fontSize='5xl' h='100'>
                        Discover your beauty today
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
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard2/>
                    </Box>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard3/>
                    </Box>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard4/>
                    </Box>
                    </HStack>
                    
                    <HStack spacing='24px'>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard5/>
                    </Box>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard6/>
                    </Box>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard7/>
                    </Box>
                    <Box w='auto' h='auto' bg='pink.100'>
                    <DiscoverCard8/>
                    </Box>
                    </HStack>
                    </VStack>
                </GridItem>
            </Grid>
        </Box>

     );
}

export default App;