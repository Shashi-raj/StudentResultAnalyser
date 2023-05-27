import React from "react";
import { Box, Stack, Text, Center, Container, Table, TableCaption, Thead, Th, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
import Avatar from '@mui/material/Avatar';
import { blueGrey } from "@mui/material/colors";
import StudentDashBoard from "./studentDashBoard";


function StudentProfile() {

    return (
        <Box>
            <StudentDashBoard />
            <Container>
                <Center>
                    <Box padding={44} boxShadow={blueGrey} bg='white' spacing={3}>
                        <Stack direction={'column'}>
                            <Center>
                                <Stack>
                                    <Avatar name='Dan Abrahmov'
                                        src='https://bit.ly/dan-abramov'
                                        sx={{ width: 100, height: 100 }}

                                    />
                                </Stack>
                            </Center>
                            <Stack spacing={5} direction={'column'} fontFamily={''} fontSize={15}>
                                <Center>Shashi Prabhat Ranjan</Center>
                                <Center>CSB19066(Computer Sciece and Enginnering)</Center>
                                <Center>prabhatshahshi7645@gmail.com</Center>
                                <Center>7643005018</Center>
                            </Stack>
                        </Stack>

                        <Box padding='4' bg='blue.400' color='black' maxW='md'>
                            <Text>Gender: Male</Text>
                            <Text>Batch: 2019-2023</Text>
                            <TableContainer>
                                <Table variant={'simple'} size={'lg'} border={'1px solid'} cellSpacing={5} cellPadding={'15 0 10 0'}>
                                    <TableCaption placement="">Education Qualification</TableCaption>
                                    <Thead >
                                        <Th>Degree  </Th>
                                        <Th>School/University  </Th>
                                        <Th>Board </Th>
                                        <Th>%marks/CGPA</Th>
                                        <Th>Division</Th>
                                        <Th>Year</Th>
                                    </Thead>
                                    <Tbody >
                                        <Tr>
                                            <Td>10th </Td>
                                            <Td>St. Joseph's School</Td>
                                            <Td>ICSE </Td>
                                            <Td>86.83</Td>
                                            <Td>1st</Td>
                                            <Td>2016</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            <Text>Hobbies: VollyBall, Chess</Text>

                        </Box>




                    </Box>
                </Center>
            </Container>
        </Box>
    )
}

export default StudentProfile;