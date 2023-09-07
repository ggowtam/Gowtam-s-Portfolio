import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";


export default function Header({ color }) {

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"7xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >



            <text>
            Hi, my name is 
            </text>
           <br />
            <Text as={"span"} color={`${color}.400`}>
            Gowtam Sai Sankar G.
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
         I'm an enthusiastic software engineer with expertise in machine learning, leadership, and IoT. I thrive on solving real-world challenges through innovative software and hardware solutions. My track record includes accolades like a 3rd place in the J-HUB HACKATHON LEAGUE under TEQIP.

          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
      <Button
  colorScheme={color}
  bg={`${color}.400`}
  rounded={"full"}
  px={6}
  _hover={{
    bg: `${color}.500`,
  }}
  onClick={() => window.open("https://www.linkedin.com/in/gowtam-1998/", "_blank")}
>
  Let's connect!
</Button>

            <Button
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
              onClick={scrollToContact}
            >
              Contact Me
            </Button>

          </Stack>
        </Stack>
      </Container>
    </>
  );
}


