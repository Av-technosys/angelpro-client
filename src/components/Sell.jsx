import React, { useEffect, useState } from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useForm } from "@formspree/react";
import Deposit from "./Deposite";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import ExchangePage from "./Exchange";

const clearAllCookies = () => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
};

const Sell = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [state] = useForm("mrbzgkjq");

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showModal);
    return () => document.body.classList.remove("no-scroll");
  }, [showModal]);

  const logOut = () => {
    localStorage.clear();
    clearAllCookies();
    alert("User successfully logged out!");
    navigate("/login");
  };

  return (
    <Box id="sell" bg="#222222" w="full" minH="100vh">
      <Container
        maxW="8xl"
        py={{ base: 8, md: 12, xl: 20 }}
        px={{ base: 4, lg: 2 }}
      >
        <Flex
          direction={{ base: "column", xl: "row" }}
          gap={{ base: 8, xl: 20 }}
          align="start"
        >
          {/* Sidebar */}
          <Flex
            direction="column"
            position={{ base: "static", xl: "sticky" }}
            top={6}
            p={{ base: 4, md: 8 }}
            flex={{ base: "1", xl: "0.8" }}
            minW={{ xl: "550px" }}
            maxW={{ xl: "600px" }}
            align="center"
            justify="center"
            bg="#222222"
          >
            <Stack spacing={6} w="full">
              <Stack direction="row" spacing={3}>
                <Text
                  textTransform="uppercase"
                  color="orange.200"
                  fontWeight={600}
                  fontSize="sm"
                  bg="orange.500"
                  px={3}
                  py={1}
                  rounded="md"
                >
                  +32K Trades
                </Text>
                <Text
                  textTransform="uppercase"
                  fontWeight={600}
                  fontSize="sm"
                  bg="#0a0a0a"
                  px={3}
                  py={1}
                  rounded="md"
                >
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </Text>
              </Stack>

              <Heading
                fontSize={{ base: "3xl", md: "4xl", xl: "5xl", "2xl": "6xl" }}
              >
                <Text
                  as="span"
                  position="relative"
                  color="white"
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "#fe5823",
                    zIndex: -1,
                  }}
                >
                  AngelPro.Online
                </Text>
                <br />
                <Text as="span" color="#fe5823">
                  Trade USDT
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg", xl: "xl" }}
                color="#bebebe"
              >
                Angel pro is the #1 place to buy and sell USDT which is free,
                and safe with 24/7 support.
              </Text>

              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button size="lg" w="full" bg="#fe5823" color="white">
                  Price
                </Button>
                <Button
                  size="lg"
                  w="full"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  _hover={{ bg: "white", color: "#222222" }}
                >
                  Contact Us
                </Button>
                <Button
                  size="lg"
                  w="full"
                  fontWeight={600}
                  color="white"
                  bg="red"
                  _hover={{ bg: "black" }}
                  onClick={logOut}
                >
                  Log Out
                </Button>
              </Stack>
            </Stack>
          </Flex>

          {/* Exchange Section */}
          <Flex
            flex="2"
            direction="column"
            w="full"
            bg="#222222"
            maxW="100%"
            px={{ base: 2, sm: 4 }}
            className="!pr-2"
          >
            <Stack spacing={8} width="100%">
              <Heading
                className="text-neutral-100"
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", xl: "5xl" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Sell{" "}
                <Text
                  as="span"
                  bgGradient="linear(to-r, #fe5823, #fe5823)"
                  bgClip="text"
                >
                  USDT
                </Text>
              </Heading>

              <ExchangePage />

              <Text
                fontSize="sm"
                color="yellow.700"
                bg="yellow.100"
                p={3}
                rounded="md"
                border="1px solid"
                borderColor="yellow.300"
              >
                ⚠ For the safety of your funds, please note that the recharge
                address for each order is different. Please double-check
                carefully to avoid the risk of irretrievable funds.
              </Text>
            </Stack>
          </Flex>
        </Flex>
      </Container>

      {/* Modals */}
      {showModal && <Deposit onClose={() => setShowModal(false)} />}
      {showProfile && <Profile onClose={() => setShowProfile(false)} />}
    </Box>
  );
};

export default Sell;
