import React, { useState,useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in successfully","success");
            history.push('/');
        }
        else {
            props.showAlert("Invalid credentials","danger");
        }

    }
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-3' style={{ maxWidth: "400px" }}>
            <h1 className='my-2 text-center'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" />
                </div>
                <div className="d-flex">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div>
                        &nbsp; &nbsp;No Account? Signup&nbsp;<Link to='/signup'>Here</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
