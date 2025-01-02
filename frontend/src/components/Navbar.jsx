import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, Container, Flex,HStack,Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}  >PRODUCT HUB 🛒</Link>

        </Text>

        <HStack spacing={2} alignItems={"center"} ml="auto">
             <Link to={"/create"}>
             <Button><PlusSquareIcon fontSize={20}/></Button>
             </Link>
             <Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
					</Button>
          </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
