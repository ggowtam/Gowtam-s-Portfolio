import {
  Divider,
  Stack,
  Text,
  Container,
  Card,
  CardBody,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { Carousel } from 'react-responsive-carousel';

import animationData from "../assets/animation_lm6z1slw.json";
import Lottie from "lottie-react";

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Projects({ color }) {

  return (
    <Container maxW={"8xl"} id="projects">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 8, md: 15 }}
        pb={{ base: 20, md: 36 }}
      >
        <div>
          <Text fontWeight={800} fontSize="2xl" mb={4}>Projects</Text>
          <Divider orientation="horizontal" />
          <Lottie
            animationData={animationData}
            className="animation-container-p"
          />
        </div>
        <Stack
          flex="1"
          px={4}
          spacing={4}
          align="center"
          justifyContent="center"
 
        >
          <Carousel className="Pbox" showThumbs={false} showStatus={false}>
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px="10" padding={15} mb={100} h={[null, "40vh"]}>
                    <Heading size="sm">Real-time Twitter Sentiment Analysis</Heading>
                    <Text fontSize="sm" py={2}>
                      During my tenure at NetElixir, I spearheaded the development of a Python API that revolutionized real-time Twitter data access. Users could input topics and instantly tap into Twitter's live tweet stream. What set this project apart was the integration of Google Natural Language Processing (NLP), enabling sentiment analysis. It categorized tweets as Positive, Negative, or Neutral, offering profound insights into the sentiment around any given topic. The project's data visualization was powered by Power BI, translating information into visually compelling charts and graphs. This visual representation made data interpretation a breeze, enhancing user understanding. Thorough testing and validation ensured a robust, error-free API. My role at NetElixir showcased my diverse programming skills, blending data analysis, web services, and user-friendly presentation to deliver a powerful real-time Twitter sentiment analysis tool.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px="10" padding={15} mb={100} h={[null, "40vh"]}>
                    <Heading size="sm">Electronic RE-USE</Heading>
                    <Text fontSize="sm" py={2}>
                      In my capacity as a web developer, I took the helm in constructing a dynamic website that introduced a unique concept – the exchange of damaged electronics for restoration. My work on this project was multifaceted, demonstrating proficiency in various programming languages and fields. JavaScript was the linchpin for creating interactive elements on the website. Through its functionality, users could seamlessly navigate and engage with the platform, making the experience intuitive and enjoyable. The PHP backend was pivotal in ensuring that the intricate mechanics behind the scenes ran smoothly. It handled user data, facilitated secure transactions, and orchestrated the entire electronics exchange process. CSS emerged as the creative canvas, transforming the website's aesthetics into visually captivating designs. Its role was crucial in making the platform not only functional but also visually appealing, enhancing the user experience.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>
            <Fade bottom>
              <Card>
                <Stack>
                  <CardBody align="left" px="10" padding={15} mb={100} h={[null, "40vh"]}>
                    <Heading size="sm">Automatic Extraction of Number Plates of Two-Wheelers without Helmet</Heading>
                    <Text fontSize="sm" py={2}>
                      Within my major project, I spearheaded a remarkable initiative focused on enhancing road safety by automating the detection of helmetless two-wheeler riders from CCTV footage. The core of this endeavor was the implementation of YOLOv2, a cutting-edge machine learning algorithm renowned for its object detection capabilities. My proficiency in Python played a pivotal role in harnessing the power of YOLOv2. I meticulously engineered a system that could not only identify helmetless riders but also perform automatic extraction of their number plates. This valuable data was seamlessly updated on the project's server, streamlining the process of fine generation for traffic violations. To further augment the project's utility, I integrated SMS alerts, ensuring that registered phone numbers received timely notifications about traffic violations. This innovative feature is for greater accountability and contributed to road safety efforts.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>
          </Carousel>
        </Stack>
      </Grid>
    </Container>
  );
}
