import React, { useState } from "react";
import {
  Divider,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { Reveal } from "./Reveal.tsx";

import netelixirLogo from "../assets/netelixir.png"; // Replace with the actual path to Netelixir's logo
import oyelabsLogo from "../assets/Oyelabs.webp"; // Replace with the actual path to Oyelabs' logo
import nauLogo from "../assets/NAU.png"; // Replace with the actual path to NAU ITS' logo

export default function Experience({ color }) {
  const [selectedExperience, setSelectedExperience] = useState("netelixir");

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <>
      <Container maxW={"8xl"} id="experience">
        <Box
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 2 }}
          pb={{ base: 20, md: 36 }}
        >
          <div>
            <Text fontWeight={800} fontSize="2xl" mb={4}>
              Experience
            </Text>
            <Divider mb={8} orientation="horizontal" />
          </div>

          <Center px={4}>
            <ButtonGroup variant="outline" mb={8}>
              <Button onClick={() => handleSelectExperience("netelixir")}>
                Netelixir
              </Button>
              <Button onClick={() => handleSelectExperience("oyelabs")}>
                Oyelabs
              </Button>
              <Button onClick={() => handleSelectExperience("nauits")}>
                NAU ITS
              </Button>
            </ButtonGroup>
          </Center>

          {selectedExperience === "netelixir" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                  <Reveal>
                    <HStack>
                      <Image
                        src={netelixirLogo}
                        alt="Netelixir Logo"
                        h={10}
                      />
                          
                      <Box px={2} align="left">
                        <Text fontWeight={600}>Netelixir</Text>
                        <Text>Software Engineer | Jul'20 - Feb'21</Text>
                      </Box>
                      
                    </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                    <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon} // Make sure to import ChevronRightIcon if not already imported
            color={`${color}.500`}
          />
          In the backend, I built applications with microservices using Spring Boot. This included creating Spring Bean Classes for business logic and utilizing Spring MVC to craft REST controllers.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          The application was seamlessly integrated through Spring-MVC using Spring Boot and Dependency Injection.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          I created and maintain a FEATURED TOOLS section on the frontend using React JS. It helps analyze webpages for better search engine performance.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Managed data effectively with Hibernate ORM, boosting the tool's performance.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Crafted user-friendly sidebars for smoother navigation, using expertise in HTML5, CSS3, and Bootstrap.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Developed easy-to-use drop-down menus using JavaScript and JQuery.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Integrated user-friendly features for enhanced usability, highlighting my UI/UX design skills.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Deployed the tool seamlessly with AWS and Jenkins.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Managed user data efficiently by utilizing MongoDB, ensuring seamless storage of user preferences, tool usage, and website statistics.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Engaged in thorough Unit Testing and CI/CD via Bugzilla, enhancing software stability.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Used JIRA for tracking tasks and Jenkins for quick software updates, enhancing teamwork and speeding up project work.
        </ListItem>
      </Reveal>
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Fade>
          )}

          {selectedExperience === "oyelabs" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <Reveal>
                    <HStack>
                      <Image
                        src={oyelabsLogo}
                        alt="Oyelabs Logo"
                        h={10}
                      />
                      <Box px={2} align="left">
                        <Text fontWeight={600}>Oyelabs</Text>
                        <Text>Php Developer | Jan'19 - Jan'20</Text>
                      </Box>
                    </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                    <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon} // Make sure to import ChevronRightIcon if not already imported
            color={`${color}.500`}
          />
          I used PHP to create interactive web pages and build a system for users to easily sign up and log in on the project's website.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Employed JSON format for seamless data exchange across application components, enhancing communication.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Utilized Tomcat to host the app, making it accessible to users online.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Managed code changes effectively using Version Control tools, supporting collaboration within the development team.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Verified REST API functionality using Postman, including calling location APIs for data verification.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          I integrated SOAP (Simple Object Access Protocol) into the code, allowing different programs to communicate using XML messages. 
          This enabled data sharing and interaction between applications in a structured manner.
        </ListItem>
      </Reveal>
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Fade>
          )}

          {selectedExperience === "nauits" && (
            <Fade bottom>
              <Card size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                  <Reveal>
                    <HStack>
                      <Image
                        src={nauLogo}
                        alt="NAU ITS Logo"
                        h={10}
                      />
                      <Box px={2} align="left">
                        <Text fontWeight={600}>NAU ITS</Text>
                        <Text>Student Administrative Assistant | Jan'22 - May'23</Text>
                      </Box>
                    </HStack>
                    </Reveal>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                    <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon} // Make sure to import ChevronRightIcon if not already imported
            color={`${color}.500`}
          />
          Managed duplicate EMPLIDs in NAU's PeopleSoft System, resolving issues through manual clean-up.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Collaborated on creating a Duplicate Application System, reviewing cases, and ensuring data accuracy.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Assisted with website updates and bug fixes to enhance user experience.
        </ListItem>
      </Reveal>
      <Reveal>
        <ListItem>
          <ListIcon
            boxSize={6}
            as={ChevronRightIcon}
            color={`${color}.500`}
          />
          Utilized Tableau to represent student data based on class grade, improving data visualization and insights.
        </ListItem>
      </Reveal>
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </Fade>
          )}
        </Box>
      </Container>
    </>
  );
}
