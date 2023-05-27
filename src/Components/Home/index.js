import { VStack, HStack, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import Register from "./Register"
import Login from "./Login"

function Home() {
  return (
    <HStack minW="full" h="100vh" justifyContent="center" alignItems="center" p="10" spacing="0" bg="green.200">
      <VStack w="50%" h="full" justifyContent="flex-start" p="6" border="1px solid" borderColor="green.500" borderRadius="12px" bg="white">
        <Heading>Mentorship Management System</Heading>
        <Heading fontSize="2xl">Register/ Login </Heading>
        <Tabs w="full" align='center' variant="soft-rounded" colorScheme="green" pt="20px">
          <TabList>
            <Tab w="50%" _focus={{ outline: "none" }}>Register</Tab>
            <Tab w="50%" _focus={{ outline: "none" }}>Login</Tab>
          </TabList>
          <TabPanels overflowY="scroll" h="64vh">
            <TabPanel w="full">
              <Register />
            </TabPanel>
            <TabPanel w="full">
              <Login />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </HStack>
  )
}

export default Home