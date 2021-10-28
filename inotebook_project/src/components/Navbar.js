import React from 'react'
import {Link,useLocation,useHistory} from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    let history = useHistory();
    const handleLogout = ()=>{
        // localStorage.removeItem('token');
        localStorage.clear();
        history.push('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/'?'active':location.pathname==='/login'?'active':''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/about'?'active':''}`}  to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary" to="/signup" role="button">SignUp</Link>
                    </form>:<form className="d-flex"><input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className ="btn btn-outline-success" type ="submit">Search</button><button className ="btn btn-primary mx-3" type ="submit" onClick={handleLogout}>LogOut</button></form>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
