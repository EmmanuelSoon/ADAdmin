import React from "react";

import logo from '../logo.jpg'

function Home () {

    return (
        <div className="container">
            <div className="mt-4 p-5 bg-light rounded">
                <h1 className="display-4 mb-5">Hello, (add in the username here)</h1>
                <p className="lead fs-4">Welcome to the admin website for GetFitWithHenry</p>
                <hr className="my-4"></hr>
            </div>
            <h5 className="lead fs-3 mt-4">Current user statistics</h5>
            <div className="card m-3 border">
                <div className="row"> 
                    <div className="col-md-4">
                        <div className="card-image border-end">
                            <img src={logo} className="rounded-circle" alt="blank" />  
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-2">
                            <ul className="list-group list-group-flush col-8">
                                <li class="list-group-item">Current number of Users: ...</li>
                                <li class="list-group-item">Current number of Recipes: ... </li>
                                <li class="list-group-item">other useful information?</li>
                            </ul>
                            <div className="col-4 float-end">
                                <button className="btn btn-primary float-end me-5">Go to Users page</button>
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
                            <img src={logo} className="rounded-circle" alt="blank" />  
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-2">
                            <ul className="list-group  list-group-flush col-8">
                                <li class="list-group-item">Current Uptime: ...</li>
                                <li class="list-group-item">Total number misclassification: ... </li>
                                <li class="list-group-item">Pending misclassification: ... </li>
                            </ul>
                            <div className="col-4 float-end">
                                <button className="btn btn-primary float-end me-5">Go to Predictions</button>
                            </div>                        </div>
                    </div>
                </div>
            </div>
            <h5 className="lead fs-3 mt-4">Report Status</h5>
            <div className="card m-3 border">
                <div className="row"> 
                    <div className="col-md-4">
                        <div className="card-image border-end">
                            <img src={logo} className="rounded-circle" alt="blank" />  
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <ul className="list-group  list-group-flush col-8">
                                <li class="list-group-item">Total number of reports: ...</li>
                                <li class="list-group-item">Pending Reports: ... </li>
                                <li class="list-group-item">Other info? </li>

                            </ul>
                            <div className="col-4 float-end">
                                <button className="btn btn-primary float-end me-5">Go to Reports page</button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 