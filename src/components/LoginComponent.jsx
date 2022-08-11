import React, { useState } from "react";

import '../loginStyle.css'

async function loginUser(credentials) {
    return fetch('/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}


function Login ({setToken}) {


    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        })
        console.log(token.status)
        if(token.status == null){
            setToken(token);
            setError("");
        }
        else{
            setError("**Invalid Login**");
        }
      }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Admin Sign In</h3>
                    <div className="mb-3">
                        <label>Username</label>
                        <input 
                            onChange={e => setUserName(e.target.value)}
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary mb-3">
                            Submit
                        </button>
                        <span style={{color:'red', fontSize:12}}>{error}</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;