import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import NavBar from "./NavBar";

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import LandingPage from "./LandingPage";
import Discover from "./Discover";
import Quiz1 from "./Quiz1";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="" element={<LandingPage/>} />
          <Route path="discover" element={<Discover/>} />
          <Route path="quiz" element={<Quiz1/>} />
          <Route path="quiz/2" element={<Quiz1/>} />
          <Route path="quiz/3" element={<Quiz1/>} />
          <Route path="quiz/4" element={<Quiz1/>} />
          <Route path="quiz/5" element={<Quiz1/>} />
          <Route path="quiz/result" element={<Quiz1/>} />

        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
