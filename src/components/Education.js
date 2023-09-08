import React from 'react';
import {
  Container,
  Grid,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';
import animationData from '../assets/R6IO8MHpbe.json'; // Replace with your animation file
import { Reveal } from "./Reveal.tsx";
const EducationPage = () => {
  return (
    <Container maxW={'8xl'} id="Education">
      <Grid 
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Left Side: Graduation and Undergraduate */}
        <Box>
          <Text fontWeight={800} fontSize="2xl" mb={4}>
            Education
          </Text>
          <Divider orientation="horizontal" mb={6} />
            
          {/* Graduation */}
          <Box mb={6}>
          <Reveal>
            <Text fontWeight={600} fontSize="lg">
              Northern Arizona University, Flagstaff{' '}
              <span fontSize="md" color="gray.600" fontWeight={200}>
                | Jan 2022 - May 2023
              </span>
            </Text>
            </Reveal>
            <Reveal>
            <Text fontWeight={400}>
              Master of Science in Computer Science
            </Text>
            </Reveal>
            <Reveal>
            <Text fontSize="md" fontWeight={200}>
              GPA: 3.55
            </Text>
            </Reveal>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div
                  className="bullet-icon-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <svg
                    className="bullet-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                Relevant Coursework: Distributed Systems, Applied Criptograpy, Network Eecurity, Block chain and Machine Learning.
              </div>
            </Reveal>
            <Reveal>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div
                  className="bullet-icon-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <svg
                    className="bullet-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
            <Text fontSize="md" fontWeight={200}>
              During my graduation, I had the opportunity to participate in Nau Boundaryless Innovation and Entrepreneurship Center, an innovation challenge where students were encouraged to come up with creative and impactful ideas. I took part with my idea focused on "Electronic Reuse."
            </Text>
            </div>
            </Reveal>
            <Reveal>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div
                  className="bullet-icon-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <svg
                    className="bullet-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
            <Text fontSize="md" fontWeight={200}>
              Recognizing the growing issue of electronic waste and its environmental impact, my idea aimed to promote the reuse and repurposing of electronic devices. The concept involved creating a platform or service that would facilitate the donation, refurbishment, redistribution of electronic devices to individuals or organizations in need.
            </Text>
            </div>
            </Reveal>
            <Reveal>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div
                  className="bullet-icon-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <svg
                    className="bullet-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
            <Text fontSize="md" fontWeight={200}>
              Activities and societies: Boundaryless Innovation and Entrepreneurship Center / Donate, Don’t Ditch
            </Text>
            </div>
            </Reveal>
          </Box>

          {/* Undergraduate */}
          <Box>
          <Reveal>
            <Text fontWeight={600} fontSize="lg">
            Institute of Aeronautical Engineering{' '}
              <span fontSize="md" color="gray.600">
                | Aug 2016 - Jun 2020
              </span>
            </Text>
            </Reveal>
            <Reveal>
            <Text fontWeight={400}>
              Bachelor of Science in Computer Science
            </Text>
            </Reveal>
            <Reveal>
            <Text fontSize="md" fontWeight={300}>
              GPA: 3.11/4.0
            </Text>
            </Reveal>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div
                  className="bullet-icon-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <svg
                    className="bullet-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  </div>
                  <Text fontSize="md" fontWeight={200}>
                   Relevant Coursework: Data Structures, Operating Systems, Cloud Application Development, Network Security, Data and Text Mining, Business Analytics, Research Methods for Software Engineering, Applied Business Intelligence, Database Management Systems,Software Testing Methodology .
                    </Text>

              </div>
            </Reveal>
            <Reveal>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <div
                  className="bullet-icon-container"
                  style={{ marginRight: "0.5rem" }}
                >
                  <svg
                    className="bullet-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  </div>
            <Text fontSize="md" fontWeight={200}>
           Publication on Automatic Extraction of Number Plates of Two-Wheelers without Helmet from CCTV Footages and Automatic Fine GenerationAutomatic Extraction of Number Plates of Two-Wheelers without Helmet from CCTV Footages and Automatic Fine Generation
          2nd International Conference on Inventive Research in Computing Applications · Jul 14, 2020
            </Text>
            </div>
            </Reveal>
          </Box>
        </Box>

        {/* Right Side: Animation */}
        <div>
          <Lottie
            animationData={animationData}
            className="animation-container-E"
          />
        </div>
      </Grid>
    </Container>
  );
};

export default EducationPage;
