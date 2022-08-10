import React from 'react';
import {Routes , Route, Navigate } from 'react-router-dom';

import WrongPredict from './WrongPredictComponent';
import Report from './ReportComponent';
import Home from './HomeComponent';
import User from './UserComponent';
import Header from './HeaderComponent';

function Main () {
    return (
        <div>
            <Header />
            <Routes>
                    <Route path="/wrongpredict" element={<WrongPredict />}/>
                    <Route path="/reports" element={<Report />}/>
                    <Route path="/" element={<Home />}/>
                    <Route path="/users" element={<User />}/>

                    <Route path="*" element= {<Navigate to="/" replace />} /> 
            </Routes>                
        </div>
    )
}
export default Main;