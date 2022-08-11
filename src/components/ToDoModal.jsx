import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from 'react-bootstrap'

export default function ToDoModal (props) {
    const {show, setShow, report, setReport} = props
    const [actions, setActions] = useState([]);
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        let newActions = [];
        report.actionsTaken.forEach(element => {
            newActions.push(element.text)
        });
        setActions(newActions);
        setStatus(report.status)
    },[show])

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleAdd = () => {
        if(text !== ''){
            let newActions = actions;
            newActions.push(text);
            setText('');
            setActions(newActions);
        }
    }

    const handleSave = () => {
        let id = report.id;
        const formdata = {
            status:status,
            actions:actions
        }
        fetch(`admin/report/addactions/${id}`,        
        {method: 'PUT', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
        })
        .then(res => {if (res.ok) {
            setShow(false)
        }});
    }
        
    const handleClear = () =>{
        setActions([]);
    }
    

    const actionList = actions.map( (action, i) => {
        return(
            <li className="list-group-item">
                {i+1 + ". " + action}
            </li>
        )}
    )

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const statusSelect = () => {
        return (
            <select className="form-select" value={status} onChange={(e) => handleStatusChange(e)}>
                <option value={"SUBMITTED"}>Submited</option>
                <option value={"RESPONDED"}>Pending Actions</option>
                <option value={"COMPLETED"}>Completed</option>
            </select>
        )
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Report details</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <div className='container'>

                    <div className="row">
                        <div className="col-12 border p-2">
                            <span>Report Content: </span> <br/>
                            <span>{report.content}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <ul className="list-group mb-2 mt-2">
                                {actionList}
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <textarea rows="3" placeholder="Enter Action taken" value = {text} onChange = {(e) => handleTextChange(e)}
                                   style={{width:'100%'}}>
                            </textarea>
                            <div className="col-6">
                                <span>Status: </span>
                                {statusSelect()}
                            </div>
                            <span><strong>Note: Please press the save button to save changes.</strong></span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        <Modal.Footer>
            <button className='btn btn-primary' onClick={() => handleAdd()}>Add</button>
            <button className="btn btn-danger" onClick={() => handleClear()}>Clear</button>
            <button className='btn btn-success' onClick={() => handleSave()}>Save</button>
        </Modal.Footer>
    </Modal>
    )
}