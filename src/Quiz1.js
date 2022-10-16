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
  } from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";
function App() {
    
    const navigate = useNavigate();
    return (      
    <Box textAlign="center" fontSize="xl">
    <Grid
      templateAreas={`"left right"
                        `}
      gridTemplateColumns={"1fr 2fr"}
      h="100vh"
      fontWeight="bold"
    >
        <GridItem pl="2" bg="pink.50" area={"left"}>
            <VStack spacing={8} align='center' verticalAlign={'center'}>
            <Text fontSize='6xl'>Question 1</Text>
            </VStack>
        </GridItem>
        <GridItem pl="2" bg="pink.100" area={"right"}>
            <VStack spacing={8} align='stretch'>
            <Text fontSize='4xl'>Is your skin oily?</Text>
            <Button colorScheme='teal' size='2xl' h='40' onClick={() => {navigate(`/quiz/2`); }}>
                Yes
            </Button>
            <Button colorScheme='teal' size='2xl' h='40' onClick={() => {navigate(`/quiz/2`); }}>
                No
            </Button>
            <Button colorScheme='teal' size='2xl' h='40' onClick={() => {navigate(`/quiz/2`); }}>
                I don't know
            </Button>
            </VStack>
        </GridItem>
    </Grid>
  </Box>
);}



export default App;