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
    HStack,
    Menu, MenuButton, MenuList, MenuItem, Button,
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from "@chakra-ui/icons";
function App() {
    return ( 
        <Box textAlign="center" fontSize="xl">
            <Grid
            templateAreas={`"top"
                                    "bottom"
                                `}
            gridTemplateRows={"1fr 6fr"}
            h="200vh"
            fontWeight="bold"
            >
                <GridItem pl="2" bg="pink.200" area={"top"}>
                    <VStack spacing={1}>
                        <Text fontSize='5xl' h='100'>
                        Discover your beauty today
                        </Text>
                        <HStack>
                        <Input placeholder='Search' w='800'/>
                        <Menu>
                        {({ isOpen }) => (
                            <>
                            <MenuButton isActive={isOpen} as={Button} w='100' rightIcon={<ChevronDownIcon />}>
                                {isOpen ? 'Close' : 'Filter by Skin Type'}
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Anti-Aging</MenuItem>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Dark Circles</MenuItem>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Dark Spots</MenuItem>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Dry Skin</MenuItem>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Fine Liner & Wrinkles</MenuItem>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Fragrance Free</MenuItem>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Oily Skin</MenuItem>
                                <MenuItem onClick={() => alert('Fliter Applied')}>Sagging Skin</MenuItem>
                            </MenuList>
                            </>
                        )}
                        </Menu>
                        </HStack>
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