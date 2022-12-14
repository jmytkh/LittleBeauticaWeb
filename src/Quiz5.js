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
      questionNumber: 5,
      question: "HOW OFTEN DO YOU APPLY SUNSCREEN?",
      hint: "How often do you use sun lotion to protect yourself? Whether it’s UV Face protection or a sunscreen for your whole body.",
      option1: 'Always',
      option2: 'Only during sunny weather',
      option3: "Never",
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
          <Button colorScheme='pink' size='xl' h='40' onClick={() => {navigate(`/quiz${property.questionNumber+1}`); }}>
              {property.option1}
          </Button>
          <Button colorScheme='pink' size='xl' h='40' onClick={() => {navigate(`/quiz${property.questionNumber+1}`); }}>
          {property.option2}
          </Button>
          <Button colorScheme='pink' size='xl' h='40' onClick={() => {navigate(`/quiz${property.questionNumber+1}`); }}>
          {property.option3}
          </Button>
          </VStack>
      </GridItem>
  </Grid>
</Box>
);}



export default App;