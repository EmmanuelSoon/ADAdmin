import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function WrongPredict (props) {

    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        fetch('/admin/wrongpredictlist')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setPredictions(data)
        })
    }, [])

    const deletePredict = () => {
        
    }

    const predictlist = predictions.map(prediction => {
        return (
            <tr key={prediction.id}>
                <td>{prediction.predictedIngredient}</td>
                <td>{prediction.actualIngredient}</td>
                <td>
                    <img src={prediction.photoString} alt="not working.." height={250} width={250} />
                </td>
                <td>
                    <button className='btn btn-danger' onClick={deletePredict(prediction.id)}>Drop</button>
                </td>
            </tr>
        )
    })


    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Predicted</th>
                        <th>User's Input</th>
                        <th>Image</th>
                        <th>Drop from Database</th>
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