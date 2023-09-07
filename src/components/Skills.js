import React from "react";
import Lottie from "lottie-react";
import { Divider, Text, Container, Grid, Box, Flex } from "@chakra-ui/react";
import animationData from "../assets/Animation - 1692742436044.json";
import { Fade } from "react-reveal";
const skills = [
  // Development Languages
  "Java",
  "Python",
  "JavaScript",
  "HTML & CSS",
  "SASS (SCSS)",
  "PHP",
  "Kotlin",

  // Frameworks
  "NodeJS",
  "Django",
  "Flask",
  "FastAPI",
  "ExpressJS",
  "Spring boot",
  "ReactJS",
  "Angular JS",
  "Redux",
  "Bootstrap",
  "Tailwind CSS",
  "JQuery",
  "React Native",
  "JavaFX",
  "Hibernate ORM",
  "AWS",
  "Jenkins",
  "R Studio",

  // Servers
  "Tomcat",
  "Oracle WebLogic Server",

  // Databases
  "MongoDB",
  "MySQL",
  "Oracle",

  // Others
  "Bugzilla",
  "Unit testing",
  "CI/CD",
  "Agile",
  "System testing",
  "WooCommerce",
  "WordPress",
  "Shopify",
  "Google Analytics",
  "Tag Manager",
  "Davinci Resolve",
  "Paid search",
  "Paid social",
  "SEO/PPC",
  "Digital marketing",
  "Kafka",
  "Maven",
  "Power BI",
];

const softskills = [
  {
    title: "Functional Skills",
    content: "Multitasking, Business Analysis and Development, Project Management, Strategic/Tactical Planning, Business Analysis and Developmen, Agile Development, Adaptability, Research and Analysis"
  }
];

export default function Skills({ color }) {
  return (
    <Container maxW={"8xl"} id="skills">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left side with skills */}
        <Fade>
        <Box>
          <Text fontWeight={800} fontSize="2xl" mb={4}>Skills</Text>
          <Divider orientation="horizontal" mb={10} />
          <ul
            style={{
              columns: 3,
              WebkitColumns: 3,
              MozColumns: 3,
            }}
          >
            {skills.map((skill, index) => (
                <Fade key={index} bottom >
              <li key={index} className="bullet-item">
                <Flex align="center">
                  {/* Add bullet icon */}
                  <svg
                    className="bullet-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    style={{ marginRight: "0.5rem" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg >
              <li key={index} className="bullet-item">
  <Flex align="center">
    <div className="icons">
      <i className="fas fa-code"></i> {/* Replace "fa-code" with the appropriate FontAwesome icon class */}
      <span>{skill}</span>
    </div>
  </Flex>
</li>
                </Flex>
              </li>
              </Fade>
            ))}
          </ul>
     

        {/* Right side with skills */}
    
         
          <Divider orientation="horizontal" mb={10} />
          {softskills.map((softskill, index) => (
            <Fade key={index} bottom>
            <div key={index} className="soft-skill-item">
              <Flex align="center">
                {/* Add bullet icon */}
                <svg
                  className="bullet-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  style={{ marginRight: "0.5rem" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Text fontWeight={800} className="skill-content">
                  {softskill.title}
                </Text>
              </Flex>
              <Text
                className="skill-content"
                color={"gray.500"}
                fontSize="xl"
                mb="2"
                mt="2"
              >
                {softskill.content}
              </Text>
            </div>
            </Fade>
          ))}
        </Box>
</Fade>
        {/* Right side with animation */}
        <div className="animation-container-S">
          <Lottie animationData={animationData} />
        </div>
      </Grid>
    </Container>
  );
}
