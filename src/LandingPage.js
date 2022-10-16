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
  } from '@chakra-ui/react';

function App() {
    return (      
    <Box textAlign="center" fontSize="xl">
    <Grid
      templateAreas={`"top"
                            "bottom"
                        `}
      gridTemplateRows={"45fr 55fr"}
      h="100vh"
      fontWeight="bold"
    >
        <GridItem pl="2" bg="pink.50" area={"top"}>
            <VStack spacing={8}>
                
            </VStack>
        </GridItem>
        <GridItem pl="2" bg="pink.100" area={"bottom"}>
            <VStack spacing={8}>
                
            </VStack>
        </GridItem>
    </Grid>
  </Box>
);}



export default App;