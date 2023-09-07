import { Container, Divider, Grid, Text, Box, HStack, Heading, Center, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/VH2hQtGFTw.json";

export default function Contact({ color }) {
  return (
    <Container maxW={"8xl"} id="contact">
      <Grid // Use Grid for side-by-side layout
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side: Contact Details */}
        <Box>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Contact
          </Text>
          <Divider orientation="horizontal" mb={20} />
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              Interested in software development and web development? Feel free to get in touch with me today!
            </Text>
            <Center>
              <HStack spacing={8} pt={4}>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/gowtam-1998/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={44} color={`${color}.500`} />
                </a>
                {/* GitHub */}
                <a href="https://github.com/ggowtam" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={44} color={`${color}.500`} />
                </a>
                {/* Email */}
                <a href="mailto:Gowtamssg@gmail.com">
                  <FaEnvelope size={44} color={`${color}.500`} />
                </a>
              </HStack>
            </Center>
            <Center>
              {/* Email */}
              <Text fontWeight={600} fontSize={"lg"} mt={10} color={"gray.600"}>
                <a href="mailto:Gowtamssg@gmail.com">
                  Gowtamssg@gmail.com
                </a>
              </Text>
            </Center>
          </Stack>
        </Box>

        {/* Right Side Animation */}
        <Lottie
          animationData={animationData}
          className="animation-container"
        />
      </Grid>
    </Container>
  );
}
