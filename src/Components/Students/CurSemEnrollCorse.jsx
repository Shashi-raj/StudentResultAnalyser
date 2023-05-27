import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Heading, Table, Tbody, Td, Text, Th, Thead } from "@chakra-ui/react";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import StudentDashBoard from "./studentDashBoard";
import { Chart as ChartJS } from "chart.js/auto";
import "../../App.css"


const UserData = [20, 30, 21, 55]
const Maxmarks = [25, 40, 25, 60]
const Test = ["Test-1", "Mid-term", "Test-3", "End-Term"]

function CourseRemarks() {
    const data = {
        labels: Test.map((data) => data),
        datasets: [
            {
                label: "Maximum marks",
                data: Maxmarks.map((data) => data),
                backgroundColor: "Green",
                borderColor: "black",
                borderWidth: 1,
            },
                {
                    label: " Marks Obtained",
                    data: UserData.map((data) => data),
                    backgroundColor: "Yellow",
                    borderColor: "black",
                    borderWidth: 1,
                }
        ],
    };

    return (
        <Box maxW={800} padding={25} textAlign={'left'}>
            <Heading size={'md'}>Remarks</Heading>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Divider orientation="horizontal" colorScheme="gray" variant={'solid'} width={'100%'} />
            <Box width={600}>
                <Bar
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Student Performance"
                            },
                            legend: {
                                display: true,
                                position: 'top',
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: true
                                },
                                title: {
                                    display: true,
                                    text: "Test Type"
                                }
                            },
                            y: {
                                grid: {
                                    display: true
                                },
                                title: {
                                    display: true,
                                    text: "Marks"
                                },
                                min: 0,
                                max: 70,
                                beginAtZero: true
                            }
                        },

                    }}
                />
            </Box>
        </Box>
    )

}

function CurEnrollCourse() {


    return (
        <>
            <StudentDashBoard />
            <div className="main_curr_enroll">
                <Accordion maxW={800} allowToggle={'true'} padding={20} >
                    <AccordionItem>
                        <h2>
                            <AccordionButton padding={5} borderBlock={'thin'} border={.1}>
                                <Box as="span" flex='1' textAlign='left'>
                                    CO110 : Compiler Design
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <CourseRemarks />
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default CurEnrollCourse;