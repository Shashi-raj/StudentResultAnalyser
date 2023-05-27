import { Box, Center, FormControl, FormLabel, Input, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Checkbox from '@mui/material/Checkbox'
import React from "react";
import StudentDashBoard from "./studentDashBoard";
import "../../App.css";

function CourseRegistration() {

    return (

        <Box>
         <StudentDashBoard />
           <Center className="co_re_main">
           <Box maxW={800} padding={20} >
            <Stack className="co_re_form_conainer" direction={'column'}>
                <FormControl className="co_re_form">
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input type="name" name="name" placeholder="Enter your name"  mb={2}/>
                </FormControl>
                <FormControl className="co_re_form">
                    <FormLabel htmlFor="rollno">Enrollment number</FormLabel>
                    <Input type="text" name="rollno" placeholder="Enter your roll code" />
                </FormControl>
                <FormControl className="co_re_form">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input type="email" name="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl className="co_re_form">
                    <FormLabel htmlFor="semester">Semester No.</FormLabel>
                    <Input type="number" name="semester" placeholder="Enter current semester" />
                </FormControl>
            </Stack>
            <Box>
                <Text mb={0}>Choose Your Subjects</Text>
                <TableContainer className="co_re_table_container" mb={20}>
                    <Table className="course_table"  border={'2px solid'}>
                        <TableCaption placement="">Core Subjects</TableCaption>
                        <Thead className="course_table-head">
                            <Th></Th>
                            <Th>Code Code </Th>
                            <Th>Course Title  </Th>
                            <Th>Credit    </Th>
                            <Th>   Type  </Th>
                        </Thead>
                        <Tbody className="course_table-body">
                            <Tr>
                                <Td><Checkbox size="sm" /></Td>
                                <Td>CO101 </Td>
                                <Td>Computteer Grapics </Td>
                                <Td>  3 </Td>
                                <Td>C </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <TableContainer>
                    <Table className="moccs_table"  border={'2px solid'}>
                        <TableCaption placement="">Mooc's</TableCaption>
                        <Thead className="moccs_head">
                            <Th></Th>
                            <Th>Code  </Th>
                            <Th>Course Name  </Th>
                            <Th>Credit    </Th>
                            <Th>   Type  </Th>
                        </Thead>
                        <Tbody className="moccs_table-body" >
                            <Tr>
                                <Td><Checkbox size="sm" /></Td>
                                <Td>CO101 </Td>
                                <Td>Computteer Grapics </Td>
                                <Td>  3 </Td>
                                <Td>C </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

            </Box>
        </Box>
           </Center>
        </Box>
    )
}

export default CourseRegistration;
