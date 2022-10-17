import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack, HStack,
    Code, Spacer,
    Grid,
    GridItem,
    theme, Image, Button
  } from '@chakra-ui/react';
  import image from "./aboutus.png";
  import { useNavigate } from "react-router-dom";

  import Discover from "./Discover";
function App() {
  const navigate = useNavigate();
    return (      
    <Box textAlign="center" fontSize="xl">
    <Grid
      templateAreas={`"top"
                            "bottom"
                        `}
      gridTemplateRows={"1fr 3fr"}
      h="200vh"
      fontWeight="bold"
    >
        <GridItem pl="2" bg="pink.50" area={"top"}>
            <VStack spacing={5}>
            <Box>
              <Image src={image} h='400'/>
            </Box>
            <HStack spacing={5}>
            <Button colorScheme='facebook' variant='outline'>
              Shop with us on Lazada
            </Button>
            <Button colorScheme='orange' variant='outline'>
            Shop with us on Shopee
            </Button>
            <Button colorScheme='pink' variant='outline' onClick={() => {navigate(`/events`); }}>
            Find us on a roadshow near you
            </Button>
            </HStack>
            <Spacer/>
            </VStack>
        </GridItem>
        <GridItem pl="2" bg="pink.100" area={"bottom"}>
            <VStack spacing={8}>
              <Discover/>
            </VStack>
        </GridItem>
    </Grid>
  </Box>
);}



export default App;