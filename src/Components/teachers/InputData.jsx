import React from "react";
import "./inputData.css"

function MyForm() {
 }
function inputData(v) {
    
    for(let i=1;i<=v;i++){
        return (
          <table>
             <tr>
            <td>Question{i}</td>
            <td><input type="text"/></td>
            <td><input type="number"/></td>
            </tr>
          </table>
        )
        
    }
}
export {MyForm, inputData};