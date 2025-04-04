import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Saifullah!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar
        src="./picProfile.png"
        size="2xl"
        name="saifullah"
      />
      <Heading as="h4" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <VStack spacing={6}>
        <Heading as="h2" size="2xl" >
        {bio1}
      </Heading>
        <Heading as="h2" size="2xl">
        {bio2}
      </Heading>
      </VStack>
    
  </VStack>
  
  </FullScreenSection>
);

export default LandingSection;
