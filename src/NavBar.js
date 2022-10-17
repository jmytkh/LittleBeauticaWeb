import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LBLogo  from './LittleBeautica.png';

const paddingSpace = "20px";

const NavButton = (displayString, navigateString) => {
  const navigate = useNavigate();
  return (
    <MenuButton
      px="2"
      py="1"
      rounded="md"
      onClick={() => {
        navigate(navigateString);
      }}
      _hover={{
        bg: useColorModeValue("pink.200", "pink.400"),
        fontWeight: "bold",
      }}
      m={2}
    >
      {displayString}
    </MenuButton>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [show] = useState(false);

  return (
    <Flex
      // mb={4}
      p={2}
      as="nav"
      alignItems="center"
      justify="space-between"
      w="100%"
      bg="pink.600"
      h="11vh"
    >
      <Box
        w="200px"
        p="-1"
        paddingLeft={paddingSpace}
        cursor="pointer"
        onClick={() => navigate("/")}
      >
        <Image src={LBLogo} boxSize="24" />
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        paddingRight={paddingSpace}
      >
        <Flex fontSize={"xl"} px="10">
          {/* Navbar buttons */}
          <Menu>
            {NavButton("Discover", "/discover")}
            {NavButton("Events and Roadshows", "/events")}
            {NavButton("Take the Skincare Quiz", "/quiz1")}
            {NavButton("Log In/Sign Up", "/")}
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
