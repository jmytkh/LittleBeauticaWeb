import DiscoverCard1 from "./DiscoverCard1";

import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    GridItem,
    theme,
    HStack
  } from '@chakra-ui/react';
function App() {
    return ( 
        <Grid gap={6}>
            
            <HStack spacing='24px'>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            </HStack>
            
            <HStack spacing='24px'>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            <Box w='auto' h='auto' bg='pink.100'>
            <DiscoverCard1/>
            </Box>
            </HStack>
        </Grid>
     );
}

export default App;