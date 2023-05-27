import { Box, Heading, Text, Grid, GridItem, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs"
import { Bar } from "react-chartjs-2";
import TeachersDashBoard from "./teachersDashboard";
import { Chart as ChartJS } from "chart.js/auto";
import "../../App.css"


const UserData = [
    {
        Grade: 'O',
        Count: 22
    },
    {
        Grade: 'A+',
        Count: '12'
    },
    {
        Grade: 'A',
        Count: 20
    },
    {
        Grade: 'B+',
        Count: 8
    },
    {
        Grade: 'B',
        Count: 15
    },
    {
        Grade: 'C',
        Count: 17
    },
    {
        Grade: 'P',
        Count: 5
    },
    {
        Grade: 'F',
        Count: 1
    }
]


function CourseRemarks() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.Grade),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.Count),
                backgroundColor: UserData.map((item) => {
                    if (item.Count > 20) return "green"
                    else if (item.sgpa > 10) return "#fafa00"
                    else if (item.Count > 5) return "yellow"
                    else return "#fd0101"
                }),
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    return (
        <Box className="main_chart" maxW={800} padding={25} textAlign={'left'}>
            <Heading size={'md'}>Chart</Heading>
            <Box width={600}>
                <Bar
                    data={userData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Student Performance"
                            },
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: true
                                },
                                title: {
                                    display: true,
                                    text: "Grade"
                                }
                            },
                            y: {
                                grid: {
                                    display: true
                                },
                                title: {
                                    display: true,
                                    text: "No. of Sudents"
                                },
                                min: 0,
                                max: 50,
                                beginAtZero: true
                            }
                        },

                    }}
                />
            </Box>
        </Box>
    )

}

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue);
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.Grade && formState.Lower && formState.Upper) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
    };

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="Grade">Grade</label>
                        <input name="Grade" onChange={handleChange} value={formState.Grade} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Lower">Lower</label>
                        <input name="Lower" onChange={handleChange} value={formState.Lower} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Upper">Upper</label>
                        <input name="Upper" onChange={handleChange} value={formState.Upper} />
                    </div>
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

function DataTable({ rows, editRow }) {

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Grade</th>
                        <th className="">Lower</th>
                        <th>Upper</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => {

                        return (
                            <tr key={idx}>
                                <td>{row.Grade}</td>
                                <td className="expands">{row.Lower}</td>
                                <td className="expands">{row.Upper}</td>
                                <td className="fit">
                                    <span className="actions">
                                        <BsFillPencilFill
                                            className="edit-btn"
                                            onClick={() => editRow(idx)}
                                        />
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

function GenerateCOPO() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            Grade: 'O',
            Lower: 135,
            Upper: 150
        },
        {
            Grade: 'A+',
            Lower: 120,
            Upper: 135
        },
        {
            Grade: 'A',
            Lower: 105,
            Upper: 120
        },
        {
            Grade: 'B+',
            Lower: 95,
            Upper: 105
        },
        {
            Grade: 'B',
            Lower: 80,
            Upper: 95
        },
        {
            Grade: 'C',
            Lower: 65,
            Upper: 80
        },
        {
            Grade: 'P',
            Lower: 45,
            Upper: 65
        },
        {
            Grade: 'F',
            Lower: 0,
            Upper: 45
        },

    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        rowToEdit === null ?
            setRows([...rows, newRow]) :
            setRows(rows.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;

                return newRow;
            })
            );
    };

    return (
        <>
            <TeachersDashBoard />
            <div className="progress_main">
            <div className="form_container">
                    <form className="form_input_data">
                        <div className="input_data">
                            <label>Course Code</label>
                            <input name="course code" type="text"  placeholder="Enter Course Code" />
                        </div>
                        <div className="input_data">
                            <label>Year</label>
                            <input name="year" type="number"  placeholder="Enter the sesional year" />
                        </div>
                        <div className="input_data">
                            <label>Semestar Number</label>
                            <input name="semester" type="number"  placeholder="Enter semester number" />
                        </div>
                        <button type="submit" className="btn" onClick={''}>
                        Submit
                        </button>
                    </form>
                </div>
            <Box marginBottom={25}>
               
                <Grid
                    h='700px'
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={2}
                >
                    <GridItem rowSpan={3} colSpan={1} ></GridItem>
                    <GridItem colSpan={2} rowSpan={1}>
                        <DataTable rows={rows} editRow={handleEditRow} />
                        {modalOpen && (
                            <Modal
                                closeModal={() => {
                                    setModalOpen(false);
                                    setRowToEdit(null);
                                }}
                                onSubmit={handleSubmit}
                                defaultValue={rowToEdit !== null && rows[rowToEdit]}
                            />
                        )}
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1} bg=''>
                         <Box justifyContent={'center'} display={'block'} margin={'auto'} padding={20}>
                            <Stack direction={'column'} justifyContent={'center'}>
                            <Text>Course Outcome Attainment = 2.45</Text>
                            <Text>Program Outcome Attainment = 3.22</Text>
                            </Stack>
                         </Box>
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={2} bg=''>
                        <CourseRemarks />
                    </GridItem>
                </Grid>
            </Box>
            </div>
        </>
    )
}

export default GenerateCOPO;