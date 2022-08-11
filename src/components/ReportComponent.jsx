import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ToDoModal from "./ToDoModal";

function Report () {

    const [reports, setReports] = useState([]);
    const[showToDoList, setShowToDoList] = useState(false);
    const[currentReport, setCurrentReport] = useState({id:0, actionsTaken:[]});
    let {id} = useParams();


    
    // useEffect(() => {
    //     fetch("/admin/reports")
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         setReports(data)
    //     })
    // }, [])

        
    useEffect(() => {
        fetch("/admin/reports")
        .then(res => res.json())
        .then(data => {
            setReports(data)
        })
    }, [showToDoList])

    const handleActions = (report) => {
        setShowToDoList(true);
        setCurrentReport(report)
    }


    const reportList = reports.map(report => {
        return (
            <tr key={report.id}>
                <td>{new Date(report.dateTime + "+0000").toUTCString()}</td>
                <td>{report.user.name}</td>
                <td>{report.status}</td>
                <td>{report.category}</td>
                <td>
                    <Link to={'/recipe/' + report.recipe.id}>
                        <button className="btn btn-primary">View Recipe</button>
                    </Link>
                </td>
                <td>
                    <a></a>
                    <div className="dropdown">
                        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            actions Available
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <li><button className="dropdown-item">Delete</button></li>
                            <li><button className="dropdown-item" onClick={() => handleActions(report)}>More Details</button></li>
                        </ul>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <div className="container">
            <h2 className="display-4 mb-5 mt-5">Reports</h2>
            <ToDoModal show={showToDoList} setShow={setShowToDoList} report={currentReport} setReport = {setCurrentReport}/>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Recipe</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {reportList}
                </tbody>
            </table>
        </div>
    )
}

export default Report;