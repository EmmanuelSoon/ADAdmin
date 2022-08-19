import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ToDoModal from "./ToDoModal";

function Report () {

    const [reports, setReports] = useState([]);
    const[showToDoList, setShowToDoList] = useState(false);
    const[currentReport, setCurrentReport] = useState({id:0, actionsTaken:[]});
    const [currentfilter, setCurrentFilter] = useState("SUBMITTED")
    const [all, setAll] = useState(true);
    
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

    const handleDelete = (id) => {
        fetch(`/admin/report/${id}`,
        {method: 'DELETE', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        }).then(
            setReports(reports.filter(report => report.id !== id))
        )        
    }

    const handleSubmitFilter = () =>{
        setCurrentFilter("SUBMITTED");
        setAll(false);
    }
    
    const handleRespondedFilter = () =>{
        setCurrentFilter("RESPONDED");
        setAll(false);
    }

    const handleCompletedFilter = () =>{
        setCurrentFilter("COMPLETED");
        setAll(false);
    }
    const handleAllFilter = () => {
        setAll(true);
    }

    const reportList = () => {
        if (all){
            return (
                reports.map(report => {
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
                                        <li><button className="dropdown-item" onClick={() => handleDelete(report.id)}>Delete</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleActions(report)}>More Details</button></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    )
                })
            )
        }
        else{
            return (
                reports.filter(r => r.status === currentfilter).map(report => {
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
                                        <li><button className="dropdown-item" onClick={() => handleDelete(report.id)}>Delete</button></li>
                                        <li><button className="dropdown-item" onClick={() => handleActions(report)}>More Details</button></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    )
                })
            )
        }

    }


    return (
        <div className="container">
            <h2 className="display-4 mb-3 mt-5">Reports</h2>
            <ToDoModal show={showToDoList} setShow={setShowToDoList} report={currentReport} setReport = {setCurrentReport}/>
            <div className="btn-group btn-group-sm mb-3" role="group">
                <button type="button" class="btn btn-outline-dark" onClick={()=> handleAllFilter()}>SHOW ALL</button>
                <button type="button" class="btn btn-outline-dark" onClick={()=> handleSubmitFilter()}>USER SUBMITTED</button>
                <button type="button" class="btn btn-outline-dark" onClick={()=> handleRespondedFilter()}>PENDING ACTIONS</button>
                <button type="button" class="btn btn-outline-dark" onClick={()=> handleCompletedFilter()}>COMPLETED</button>
            </div>

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
                    {reportList()}
                </tbody>
            </table>
        </div>
    )
}

export default Report;