import React from 'react';
import {Routes , Route, Navigate } from 'react-router-dom';

import WrongPredict from './WrongPredictComponent';


function Main () {

    return (
        <div>
            <Routes>
                    <Route path="/wrongpredict" element={<WrongPredict />}/>
                    <Route path="*" element= {<Navigate to="/wrongpredict" replace />} /> 
                
            </Routes>
        </div>
    )
}
export default Main;