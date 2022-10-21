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
  const property = {
      questionNumber: 6,
      question: "ANY SPECIAL REQUIREMENTS YOU NEED FOR YOUR SKINCARE?",
      hint: "If you have any allergies or want only alcohol-free, perfume-free or natural products let us know. Selecting one of these may limit your number of suitable products but NIVEA can still offer helpful advice and selected products.",
      option1: "No restrictions",
      option2: 'Alchohol and fragrance free',
      option3: "Prefer natural products",
    }
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
            <Spacer/>
            <Text fontSize='xl'>Question {property.questionNumber}</Text>
          <Spacer/>
          <Spacer/>
          <Text fontSize='4xl'>{property.question}</Text>
            <Spacer/>
            <Spacer/>
            <Text fontSize='xl'>{property.hint}</Text>
          </VStack>
      </GridItem>
      <GridItem pl="2" bg="pink.100" area={"right"}>
          <VStack spacing={8} align='stretch'>
          <Spacer/>
          <Button colorScheme='pink' size='xl' h='40' onClick={() => {navigate(`/quizresult`); }}>
              {property.option1}
          </Button>
          <Button colorScheme='pink' size='xl' h='40' onClick={() => {navigate(`/quizresult`); }}>
          {property.option2}
          </Button>
          <Button colorScheme='pink' size='xl' h='40' onClick={() => {navigate(`/quizresult`); }}>
          {property.option3}
          </Button>
          </VStack>
      </GridItem>
  </Grid>
</Box>
);}



export default App;