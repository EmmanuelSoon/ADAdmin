import React, { useState, useEffect } from "react";

function User () {

    const [users, setUsers] = useState([]);
    const [max , setMax] = useState(10);
    const [min, setMin] = useState(0);

    useEffect(() =>{
        fetch(`/admin/getusers`)
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    let increaseCount = () => {
        setMax(max + 10)
        setMin(min + 10)
    }
    
    let decreaseCount = () => {
        setMax(max - 10)
        setMin(min - 10)
    }

    let handleRoleChange = (id) => {
        fetch(`admin/setuserrole/${id}`,        
        {method: 'PUT', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let newUsers = [...users];
            for (let i = 0; i < newUsers.length; i++){
                if(newUsers[i].id === data.id){
                    newUsers[i].role = data.role;
                }  
            }
            setUsers(newUsers)
        })
    }

    let handleDelete = (id) => {
        fetch(`/admin/userdelete/${id}`, 
        {method: 'DELETE', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(
        setUsers(users.filter(prediction => prediction.id !== id))
        );    
    }

    const userList = users.filter((item, i) => i < max && i >= min && item.name !== "official-user").map(user => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-secondary" onClick={() => handleRoleChange(user.id)}>Change Role</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <div className="container">
            <h2 className="display-4 mb-5 mt-5">Current Users</h2>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
            <div className='row'>
                    <div className='col-1' >
                        <button className='btn btn-outline-dark rounded-circle' onClick={() => decreaseCount()} disabled={min <= 0}><i className="fa fa-arrow-left" aria-hidden="true"></i></button> 
                    </div>
                    <div className='col-10 text-center lead fs-4'>
                        {min+1} ... {max}
                    </div>
                    <div className='col-1 float-end'>
                        <button className='btn btn-outline-dark rounded-circle' onClick={() => increaseCount()}  disabled={max >= users.length}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
        </div>
    )
}

export default User;