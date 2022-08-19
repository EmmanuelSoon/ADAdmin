import React, { useEffect, useState } from 'react';
import ImageComponent from './ImageComponent'




function WrongPredict (props) {

    const [predictions, setPredictions] = useState([]);
    const [currentfilter, setCurrentFilter] = useState(0);

    useEffect(() => {
        fetch('/admin/wrongpredictlist')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setPredictions(data)
        })
    }, [])

    const deletePredict = (id) => {
        fetch(`/admin/wrongpredictdelete/${id}`, 
        {method: 'DELETE', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(
        setPredictions(predictions.filter(prediction => prediction.id !== id))
        );    
    }

    const changeStatus = (id) => {
        fetch(`/admin/wrongpredictstatus/${id}`,
        {method: 'PUT', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }).then (res => res.json())
        .then (data => setPredictions(data))
    }

    const handleApprovedFilter = () => {
        setCurrentFilter(1);
    }
    
    const handlePendingFilter = () => {
        setCurrentFilter(0);
    }

    const predictlist = predictions.filter(p => p.status === currentfilter).map(prediction => {
        return (
            <tr key={prediction.id}>
                <td>{prediction.predictedIngredient}</td>
                <td>{prediction.actualIngredient}</td>
                <td>
                    {/* <img src={prediction.photoString} alt="not working.." height={250} width={250} /> */}
                    <ImageComponent image={prediction.photoString} /> 
                </td>
                <td>
                    <span>{prediction.status > 0 ? "Approved" : "Pending"}</span>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={() => deletePredict(prediction.id)}>Drop</button>
                    <button className='btn btn-primary' onClick ={() => changeStatus(prediction.id)}>Change Status</button>

                </td>
            </tr>
        )
    })


    return (
        <div className='container'>
            <h1 className='display-4 mt-5 mb-3'>User Photo Submissions</h1>
            <div className="btn-group btn-group-sm" role="group">
                <button type="button" class="btn btn-outline-dark" onClick={()=> handlePendingFilter()}>PENDING</button>
                <button type="button" class="btn btn-outline-dark" onClick={()=> handleApprovedFilter()}>APPROVED</button>
            </div>
            <table className='table text-center mt-3'>
                <thead>
                    <tr>
                        <th>Predicted</th>
                        <th>User's Input</th>
                        <th>Image</th>
                        <th>Current Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {predictlist}
                </tbody>
            </table>
        </div>
    );
}

export default WrongPredict;