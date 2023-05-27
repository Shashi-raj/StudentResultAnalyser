import React from "react";
import './addCourse.css';
import { Box, Center, FormLabel, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import TeachersDashBoard from "./teachersDashboard"

function Addcourse() {

    let [value, setValue] = React.useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    return (
        <>
           <TeachersDashBoard />
            <Center>
            <Box padding={20} width={800} marginBottom={30}>
                <Stack direction={'column'} spacing={3}>
                    <FormLabel>Course Name</FormLabel>
                    <Input type="name"  placeholder="Enter Course Name" size='lg' height={20} />
                    <FormLabel>Course Code</FormLabel>
                    <Input type="text" size='lg' placeholder="Enter Course Code" height={20}/>
                    <Stack direction={'row'} padding={10}>
                        <FormLabel>Course Credit</FormLabel>
                        <Select placeholder="Select Options">
                            <option value=''>1</option>
                            <option value=''>2</option>
                            <option Value=''>3</option>
                            <option value=''>4</option>
                            <option value=''>6</option>
                            <option value=''>8</option>
                            <option value=''>12</option>
                        </Select>
                        <FormLabel>Course Type</FormLabel>
                        <Select placeholder="Select Options">
                            <option value=''>C</option>
                            <option value=''>E</option>
                            <option Value=''>OE</option>
                            <option value=''>AO</option>
                        </Select>
                        <FormLabel>Departmemt</FormLabel>
                        <Select placeholder="Select Options">
                            <option value=''>CSE</option>
                            <option value=''>CE</option>
                            <option Value=''>ECE</option>
                            <option value=''>EE</option>
                            <option value=''>ME</option>
                            <option value=''>FET</option>
                        </Select>
                    </Stack>
                    <Text>Course Discription</Text>
                    <Textarea
                        value={value}
                        onChange={handleInputChange}
                        placeholder='Enter course discription'
                        size='sm'
                    />

                    <Stack>
                        <Text>Course Outcomes</Text>
                        <Text>CO1</Text>
                        <Textarea placeholder="Enter course outcome" />
                        <Text>CO2</Text>
                        <Textarea />
                        <Text>CO3</Text>
                        <Textarea />
                        <Text>CO4</Text>
                        <Textarea />
                        <Text>CO5</Text>
                        <Textarea />
                        <Text>CO6</Text>
                        <Textarea />
                    </Stack>
                </Stack>
            </Box>
            </Center>
        </>
    );
}
export default Addcourse;