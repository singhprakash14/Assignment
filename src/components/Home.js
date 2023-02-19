import React from 'react'
import { Box,Button,Flex,Image,SimpleGrid,Stack,Text,HStack } from "@chakra-ui/react";
import img from "./image/photo_2023-02-18_21-11-03.jpg";
import img1 from"./image/image1.png";
import img2 from './image/img2.png'
import img3 from './image/img3.jpg'
import img4 from "./image/img4.png"
import img5 from "./image/img5.png"
import img6 from "./image/img6.png"
import img8 from "./image/img8.png"
import img9 from "./image/img9.png"
import img10 from "./image/img10.png"
import img11 from "./image/img11.png"

function Home() {
  return (
    <>
      <Flex>
        <Box w={"960px"} h={"800px"}>
          <Image
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt="Dan Abramov"
          />
        </Box>

        <Box w={"960px"} h={"600px"}>
          <Image
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
      <Box
        w={"80%"}
        h={"300px"}
        margin={"auto"}
        bg={"#FFFFFF"}
        borderRadius={"15px"}
        position={"absolute"}
        left={"142px"}
        top={"490px"}
        boxShadow={"1px 2px 9px"}
      >
        <Text fontSize="3xl" color={"black"} mt={"15px"}>
          Welcome to Handcrafts By Erma With Your Subbing Amiga Irma
        </Text>
        <br />
        <br />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At autem
          molestias veritatis. Ducimus cum adipisci dolor culpa quas! Mollitia
          quia ex eligendi. Eius dignissimos ipsam, natus et labore ipsa
          repudiandae.
        </Text>
        <br />
        <br />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At autem
          molestias veritatis. Ducimus cum adipisci dolor culpa quas! Mollitia
          quia ex eligendi. Eius dignissimos ipsam, natus et labore ipsa
          repudiandae.
        </Text>
      </Box>
      <Box
        w={"100%"}
        position={"absolute"}
        height={"533.84px"}
        top={"733.24px"}
        borderRadius={"15px"}
      >
        <Image
          w={"95%"}
          h={"700px"}
          margin={"auto"}
          mt={"60px"}
          src={img}
          alt="Dan Abramov"
        />
        <Box position={"absolute"} left={"600px"} top={"333.24px"}>
          <Text fontSize="3xl" color={"black"}>
            Introducing Your Own Subbing Amiga
          </Text>
          <br />
          <Text fontFamily={"sm"}>
            My name is Irma, and I am the driving force behind Handcrafts by
            Irma,a shop that <br /> specializes in sublimation design and
            supply.My passion for crafting high-quality and visually
            <br />
            stunning products comes from a deep belief that beautifully crafted
            items can empower business owners.
            <br />
          </Text>
          <br />
          <Button color={"white"} left={"-120px"} bg={"black"}>
            Learn More About Me
          </Button>
        </Box>
        <Box
          w={"100%"}
          h={"500px"}
          position={"absolute"}
          bg={"rgba(113, 101, 135, 1)"}
          alignItems={"center"}
          mb={"10px"}
        >
          <Text fontSize="4xl" color={"white"} mt={"15px"} textAlign={"center"}>
            Why Choose Us?
          </Text>
          <Text fontSize="sm" color={"white"} mt={"15px"} gap={"5px"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Eum inventore tenetur maiores quidem dolor iste repellendus
            recusandae
            <br />
            nostrum explicabo consequuntur, fuga eius pariatur vitae a dolores
            impedit sit voluptatem mollitia!
          </Text>
          <SimpleGrid
            columns={3}
            w={"90%"}
            h={"350px"}
            margin={"auto"}
            gap={"20px"}
            mt={"20px"}
          >
            <Box w={"auto"} h="300px" bg={"white"} borderRadius={"20px"}>
              <Image w={"50%"} margin={"auto"} src={img1} mt={"15px"} />
              <Text fontSize="2xl" color={"black"} mt={"25px"}>
                Expertise and Experise
              </Text>
            </Box>
            <Box w={"auto"} h="300px" bg={"white"} borderRadius={"20px"}>
              <Image w={"50%"} margin={"auto"} src={img2} mt={"15px"} />
              <Text fontSize="2xl" color={"black"} mmt={"55px"}>
                {" "}
                High Quality products
              </Text>
            </Box>
            <Box w={"auto"} h="300px" bg={"white"} borderRadius={"20px"}>
              <Image w={"50%"} margin={"auto"} src={img3} mt={"15px"} />
              <Text fontSize="2xl" color={"black"} mt={"55px"}>
                Personalized Support
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <SimpleGrid
          w={"70%"}
          h={"900px"}
          bg={"rgba(248, 215, 106, 1)"}
          margin={"auto"}
          mt={"550px"}
          borderRadius={"30px"}
        >
          <Text fontSize="2xl" color={"white"} mt={"55px"}>
            Discover Our Collection
          </Text>
          <Box marginLeft={"600px"} md={"80px"}>
            <Image w={"150px"} src={img4} />
            <Text mt={"-100px"} ml={"110px"}>
              Best in class T-shirts
            </Text>
            <Button ml={"110px"}>Explore</Button>
          </Box>
          <Box marginLeft={"100px"} md={"80px"}>
            <Image w={"150px"} ml={"180px"} src={img5} />
            <Text mt={"-120px"} mr={"700px"}>
              Best in class T-shirts
            </Text>
            <Button mr={"710px"}>Explore</Button>
          </Box>
          <Box marginLeft={"600px"} md={"280px"}>
            <Image w={"150px"} md={"400px"} src={img6} />
            <Text mt={"-100px"} ml={"110px"}>
              Best in class T-shirts
            </Text>
            <Button ml={"110px"}>Explore</Button>
          </Box>
        </SimpleGrid>

        <SimpleGrid w={"100%"} mt={"50px"}>
          <Image src={img8} w={"100%"} h={"900px"} />
          <Image
            src={img9}
            w={"25%"}
            h={"auto"}
            position={"absolute"}
            left={"750px"}
            mt={"130px"}
          />

          <Text
            position={"absolute"}
            fontSize="2xl"
            color={"black"}
            mt={"500px"}
            ml={"600px"}
          >
            Testimonials
          </Text>
          <SimpleGrid
            w={"auto"}
            h={{ base: "100%", md: "50%", xl: "25%" }}
            columns={3}
            position={"absolute"}
            mt={"600px"}
          >
            <Box
              w={"80%"}
              h={"250px"}
              borderRadius={"20px"}
              boxShadow={"1px 2px 9px black"}
              margin={"auto"}
            >
              <Text>
                I recently ordered some customized products from this
                sublimation printing website and I was absolutely thrilled with
                the results. The entire process, from designing my items to
                placing the order, was simple and easy to follow.
              </Text>
              <Image src={img10} mt={"20px"} />
            </Box>
            <Box
              w={"80%"}
              h={"250px"}
              borderRadius={"20px"}
              boxShadow={"1px 2px 9px black"}
              margin={"auto"}
            >
              <Text>
                I recently ordered some customized products from this
                sublimation printing website and I was absolutely thrilled with
                the results. The entire process, from designing my items to
                placing the order, was simple and easy to follow.
              </Text>
              <Image src={img10} mt={"20px"} />
            </Box>
            <Box
              w={"80%"}
              h={"250px"}
              borderRadius={"20px"}
              boxShadow={"1px 2px 9px black"}
              margin={"auto"}
            >
              <Text>
                I recently ordered some customized products from this
                sublimation printing website and I was absolutely thrilled with
                the results. The entire process, from designing my items to
                placing the order, was simple and easy to follow.
              </Text>
              <Image src={img10} mt={"20px"} />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid
          mt={"120px"}
          h={{ base: "100%", md: "50%", xl: "25%" }}
          columns={2}
        >
          <Box w={"100%"}>
            <Image w={"500px"} ml={"110px"} src={img11} />
          </Box>
          <Box w={"100%"}>
            <Text fontSize="4xl" color={"black"}>
              Ready to Grow your Business?
            </Text>
            <br />
            <Text fontSize="2xl" color={"black"}>
              My aim is to help you succeed at every step of your sublimation
              business journey. That’s Why I Offer Support for your Sublimation
              Business journey through various resources such as courses, 1-on-1
              Coaching, Design counselling and e-books
            </Text>
            <br />
            <Button color={"white"} mr={"400px"} bg={"black"}>
              Learn More
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
      
    </>
   
  );
}

export default Home 