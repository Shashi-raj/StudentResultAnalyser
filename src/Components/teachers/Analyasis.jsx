import React, { useState } from "react";
import TeachersDashBoard from "./teachersDashboard";

const data = [
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 74,
        grade: 'A'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 10,
        grade: 'F'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 9,
        grade: 'F'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 10,
        grade: 'F'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 15,
        grade: 'F'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 82,
        grade: 'A+'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 91,
        grade: 'O'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 54,
        grade: 'B'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 66,
        grade: 'B+'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 46,
        grade: 'P'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 80,
        grade: 'A+'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 70,
        grade: 'A'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 35,
        grade: 'P'
    },
    {
        rollno: "CSB19066",
        name: "Shashi",
        marks: 45,
        grade: 'C'
    }
]

const GroupType = ({ row, idx }) => {

    return (

        <tr key={idx}>
            <td>{row.rollno}</td>
            <td>{row.name}</td>
            <td>{row.marks}</td>
            <td>{row.grade}</td>
        </tr>

    )

}

function Analysis() {
    const [userData, setUserData] = useState(data);

    return (
        <>
            <TeachersDashBoard />
            <div className="analysis_container">
                <div className="analysis_body">
                    <h3 className="analysis_h1">Good Student</h3>
                    <table className="analysis_table">
                        <thead className="ana_table_head">
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Grade</th>
                        </thead>
                        <tbody className="ana_table_body">
                            {userData.map((row, idx) => {
                                if (row.grade === 'O' || row.grade === 'A+' || row.grade === 'A')
                                    return (
                                        <GroupType row={row} idx={idx} />
                                    )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="analysis_body">
                    <h3 className="analysis_h2">Average Student</h3>
                    <table className="analysis_table">
                        <thead className="ana_table_head">
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Grade</th>
                        </thead>
                        <tbody className="ana_table_body">
                            {userData.map((row, idx) => {
                                if (row.grade === 'B+' || row.grade === 'B')
                                    return (
                                        <GroupType row={row} idx={idx} />
                                    )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="analysis_body">
                    <h3 className="analysis_h3">Mild Student</h3>
                    <table className="analysis_table">
                        <thead className="ana_table_head">
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Grade</th>
                        </thead>
                        <tbody className="ana_table_body">
                            {userData.map((row, idx) => {
                                if (row.grade === 'C' || row.grade === 'P')
                                    return (
                                        <GroupType row={row} idx={idx} />
                                    )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="analysis_body">
                    <h3 className="analysis_h4">Poor Student</h3>
                    <table className="analysis_table">
                        <thead className="ana_table_head">
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Grade</th>
                        </thead>
                        <tbody className="ana_table_body">
                            {userData.map((row, idx) => {
                                if (row.grade === 'F')
                                    return (
                                        <GroupType row={row} idx={idx} />
                                    )

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Analysis;