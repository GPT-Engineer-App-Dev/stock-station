import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#f3f2f1">
      <Flex as="nav" bg="#333333" color="white" p={4} align="center">
        <Heading size="lg">Financial Times</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#news" fontSize="lg">News</Link>
          <Link href="#markets" fontSize="lg">Markets</Link>
          <Link href="#about" fontSize="lg">About</Link>
        </HStack>
      </Flex>

      <Box as="section" id="news" p={8}>
        <Heading size="md" mb={4}><FaNewspaper /> News Articles</Heading>
        <VStack spacing={4} align="start">
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="sm">Article 1</Heading>
            <Text mt={2}>Summary of the first news article...</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="sm">Article 2</Heading>
            <Text mt={2}>Summary of the second news article...</Text>
          </Box>
        </VStack>
      </Box>

      <Box as="section" id="markets" p={8} bg="gray.50">
        <Heading size="md" mb={4}><FaChartLine /> Market Data</Heading>
        <VStack spacing={4} align="start">
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="sm">Market Overview</Heading>
            <Text mt={2}>Summary of the market data...</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="sm">Stock Prices</Heading>
            <Text mt={2}>Summary of the stock prices...</Text>
          </Box>
        </VStack>
      </Box>

      <Box as="section" id="about" p={8}>
        <Heading size="md" mb={4}><FaInfoCircle /> About Us</Heading>
        <Text>Information about the Financial Times...</Text>
      </Box>
    </Container>
  );
};

export default Index;