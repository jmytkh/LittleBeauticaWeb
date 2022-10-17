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
    Button,
    Spacer,
  } from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";
function App() {
    
    const navigate = useNavigate();

    return (      
        <Box textAlign="center" fontSize="xl">
        <Grid
          templateAreas={`"left right"
                            `}
          gridTemplateColumns={"1fr 1fr"}
          h="100vh"
          fontWeight="bold"
        >
            <GridItem pl="2" bg="pink.200" area={"left"}>
                <VStack spacing={8} align='center' verticalAlign={'center'}>
                <Text fontSize='5xl'></Text>
                <Spacer/>
                <Spacer/>
                <Text fontSize='4xl'></Text>
                </VStack>
            </GridItem>
            <GridItem pl="2" bg="pink.100" area={"right"}>
                <VStack spacing={8} align='stretch'>
                <Spacer/>

                </VStack>
            </GridItem>
        </Grid>
      </Box>
    );}
    
    
    
    export default App;