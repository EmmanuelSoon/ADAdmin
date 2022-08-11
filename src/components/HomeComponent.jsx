import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import logo from '../logo.jpg'

function Home () {

    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("/admin/dashboard")
        .then(response => response.json())
        .then(body => {
            setData(body)
        })
    },[])

    return (
        <div className="container">
            <div className="mt-4 p-4 bg-light rounded">
                <h1 className="display-4 mb-5">Hello, (add in the username here)</h1>
                <p className="lead fs-4">Welcome to the admin website for GetFitWithHenry</p>
                <hr className="my-4"></hr>
            </div>
            <h5 className="lead fs-3 mt-4">Current user statistics</h5>
            <div className="card m-3 border">
                <div className="row"> 
                    <div className="col-md-4">
                        <div className="card-image border-end">
                            <img src={logo} alt="blank" />  
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-2">
                            <ul className="list-group list-group-flush col-8">
                                <li className="list-group-item lead">Current number of Users: {data.userCount} </li>
                                <li className="list-group-item lead">Current number of Recipes: {data.recipeCount} </li>
                                <li className="list-group-item lead">Flagged Recipes: {data.flaggedCount}</li>
                            </ul>
                            <div className="col-4 float-end">
                                <Link to={"/users"} >
                                    <button className="btn btn-primary float-end me-5">Go to Users page</button>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="lead fs-3 mt-4">Prediction Model</h5>
            <div className="card m-3 border">
                <div className="row"> 
                    <div className="col-md-4">
                        <div className="card-image border-end">
                            <img src={logo} alt="blank" />  
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-2">
                            <ul className="list-group  list-group-flush col-8">
                                <li className="list-group-item lead">Current Uptime: {data.databaseCreated} </li>
                                <li className="list-group-item lead">Total number misclassification: {data.wpCount} </li>
                                <li className="list-group-item lead">Pending misclassification: {data.pendingWpCount} </li>
                            </ul>
                            <div className="col-4 float-end">
                                <Link to={"/wrongpredict"}>
                                    <button className="btn btn-primary float-end me-5">Go to Predictions</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="lead fs-3 mt-4">Report Status</h5>
            <div className="card m-3 border">
                <div className="row"> 
                    <div className="col-md-4">
                        <div className="card-image border-end">
                            <img src={logo}  alt="blank" />  
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <ul className="list-group  list-group-flush col-8">
                                <li className="list-group-item lead">Total number of reports: {data.reportCount}</li>
                                <li className="list-group-item lead">Pending Reports: {data.pendingReport} </li>
                                <li className="list-group-item lead">Other info? </li>

                            </ul>
                            <div className="col-4 float-end">
                                <Link to={"/reports"}>
                                    <button className="btn btn-primary float-end me-5">Go to Reports page</button>
                                </Link>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 