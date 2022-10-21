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
import DiscoverProduct1 from "./DiscoverProduct1";
import DiscoverProduct2 from "./DiscoverProduct2";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
import Quiz3 from "./Quiz3";
import Quiz4 from "./Quiz4";
import Quiz5 from "./Quiz5";
import Quiz6 from "./Quiz6";
import QuizResults from "./QuizResults";
import Events from "./Events";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="" element={<LandingPage/>} />
          <Route path="discover" element={<Discover/>} />
          <Route path="quiz1" element={<Quiz1/>} />
          <Route path="quiz2" element={<Quiz2/>} />
          <Route path="quiz3" element={<Quiz3/>} />
          <Route path="quiz4" element={<Quiz4/>} />
          <Route path="quiz5" element={<Quiz5/>} />
          <Route path="quiz6" element={<Quiz6/>} />
          <Route path="quizresult" element={<QuizResults/>} />
          <Route path='101' element={<DiscoverProduct1/>} />
          <Route path='102' element={<DiscoverProduct2/>} />
          <Route path='events' element={<Events/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
