import { Image, Box, Center, Stack, Text, TableContainer, Table, Thead, Th, Tbody, Td, Button } from "@chakra-ui/react";
import React from "react";
import StudentDashBoard from "./studentDashBoard";
import "../../App.css"

function RunningTS() {
  
    const print = () => window.print();

    return (
        <Box>
         <StudentDashBoard />
              <Center>
              <Box padding={20} maxW={600}>
            <Stack direction={'column'} mb={15}>
                <Center>
                    <Image
                        borderRadius='120px'
                        boxSize='120px'
                        src='./Images/tulogo.jpeg'
                        alt='Dan Abramov'
                        shape=''
                    />
                </Center>
                <Center>R U N N I N G   T R A N S C R I P T</Center>
                <Stack direction={'column'}>
                    <Text>Name: Shashi Prabht ranjan</Text>
                    <Text>Roll Number: CSB19066</Text>
                </Stack>
                <Stack direction="">
                    <Text>Previous Semester: 7 , </Text>
                    <Text>CGPA(Comulative Point Grade Average)=6.65 , </Text>,
                    <Text>SGPA(Semester's Grade Point Average)=7.5 , </Text>,
                    <Text>Total Credit Completed=101</Text>
                </Stack>
                <Center>
                    <TableContainer>
                        <Table border={'2px solid'} className="running_table">
                            <Thead className="running_head">
                                <Th>Course Code</Th>
                                <Th>Course Title</Th>
                                <Th>Credit</Th>
                                <Th>Grade</Th>
                            </Thead>
                            <Tbody className="running_body">
                                <Td>CO101</Td>
                                <Td>Computer graphics</Td>
                                <Td>3</Td>
                                <Td>A</Td>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Center>
                
            </Stack>
            <Center><Button onClick={print} colorScheme='blue' variant={'solid'} size={'lg'} borderRadius={'sm'}>Print</Button></Center>
        </Box>
              </Center>
        </Box>
       
    )

}

export default RunningTS;