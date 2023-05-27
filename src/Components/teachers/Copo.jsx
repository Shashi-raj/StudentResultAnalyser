import React from "react";
import './Copo.css';
import TeachersDashBoard from "./teachersDashboard";
import { Center } from "@chakra-ui/react";

function CopoMapping(){
    

    return (
        <>
        <TeachersDashBoard />
        <Center>
        <div className="comap">
            <form className="co-po1">
                <label className="label3">Course Code:</label><br/>
                <input className="input3" type="text"/><br/>
                <label className="label3">Course Name:</label><br/>
                <input className="input3" type="text"/><br/>
                <label className="label3">Course Type:</label>
                <select className="dropdown2">
                                <option value={'0'}>0</option>
                                <option value={'1'}>1</option>
                                <option value={'2'}>2</option>
                                <option value={'3'}>3</option>
                                <option value={'4'}>4</option>
                                <option value={'6'}>6</option>
                                <option value={'8'}>8</option>
                                <option value={'12'}>12</option>
                </select>
                <label className="label3">Course Credit:</label>
                <select className="dropdown2">
                                <option value={'C'}>C</option>
                                <option value={'E'}>E</option>
                                <option value={'OE'}>OE</option>
                                <option value={'AO'}>AO</option>
                </select><br/>
                <label className="label3">Department:</label><br/>
                <input className="input3" type="text"/>
            </form>
            <div className="copomaping">
                <table className="copotable">
                    <caption className="header">CO-PO Mapping</caption>
                    <tr className="head">
                        <th></th>
                        <th>PO1</th>
                        <th>PO2</th>
                        <th>PO3</th>
                        <th>PO4</th>
                        <th>PO5</th>
                        <th>PO6</th>
                        <th>PO7</th>
                        <th>PO8</th>
                        <th>PO9</th>
                        <th>PO10</th>
                        <th>PO11</th>
                        <th>PO12</th>
                        <th>PSO1</th>
                        <th>PSO2</th>
                        <th>PSO3</th>
                    </tr>
                    <tr className="head">
                        <td className="col2">CO1</td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                    </tr>
                    <tr className="head">
                        <td className="col2">CO2</td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                    </tr>
                    <tr className="head">
                        <td className="col2">CO3</td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                    </tr>
                    <tr className="head">
                        <td className="col2">CO4</td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                    </tr>
                    <tr className="head">
                        <td className="col2">CO5</td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                    </tr>
                    <tr className="head">
                        <td className="col2">CO6</td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                    </tr>
                    <tr className="head">
                        <td className="col2">Avg.</td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                        <td><input className="col_input" type="number"/></td>
                    </tr>
                </table> 
            </div>
            <button className="button1" type='Submit' value='Submit' onClick={()=>{console.log('submit')}}>Submit</button>
        </div>
        </Center>
        </>
    );
}

export default CopoMapping;