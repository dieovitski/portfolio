import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={3} align="center" >
      Hi there, I am a Full stack developer based in Turkey!
      
      </Box>
      
      <Box display={{md:"flex"}}>
      <Box flexGrow={1}>
      <Heading as="h2" variant="page title">
      Ihsan F. Dokumacioglu
      </Heading>
      <p>Developer / Designer</p>

      </Box>
      </Box>
    </Container>
  );
}
export default Page;