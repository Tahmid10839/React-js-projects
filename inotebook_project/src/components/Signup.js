import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const { name, email, password } = credentials;
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== credentials.cpassword) {
            // alert("Password did not match");
            props.showAlert("Password did not match with confirm password","danger");
        }
        else {
            const response = await fetch('http://localhost:5000/api/auth/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            console.log(json);
            if (json.success) {
                history.push('/login');
                props.showAlert("Registered Successfully. Login to enter into the website","success");
            }
            else {
                // alert(json.error);
                props.showAlert(json.error,"danger");
            }
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-3' style={{ maxWidth: "500px" }}>
            <h1 className='my-2 text-center'>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} aria-describedby="emailHelp" placeholder="Name must be at least 3 characters" minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="Email must be valid" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Password must be at least 5 characters" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" value={credentials.cpassword} onChange={onChange} name="cpassword" required />
                </div>
                {/* <button disabled={credentials.name.length < 3 || credentials.password.length < 5} type="submit" className="btn btn-primary">SignUp</button> */}
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </div>
    )
}

export default Signup
