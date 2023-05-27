import { Box, Stack, Center, Image, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import StudentDashBoard from "./studentDashBoard";

function Result() {

    return (
        <>
           <StudentDashBoard />
            <Center>
                <Box padding={10} maxW={700}>
                    <Stack>
                        <Center>
                            <Image
                                borderRadius='120px'
                                boxSize='120px'
                                src='./Images/tulogo.jpeg'
                                alt='Dan Abramov'
                                shape=''
                            />
                        </Center>
                        <Center>
                            <Heading as='h2' size='xl'>
                                TEZPUR  UNIVERSITY
                            </Heading>
                        </Center>
                        <Center>NAPAAM, SONITPUR, ASSAM, 784028, INDIA </Center>
                        <Divider variant={'solid'} orientation='horizontal' size={500} colorScheme="Green" />
                    </Stack>
                </Box>
            </Center>
        </>
    )
}

export default Result;