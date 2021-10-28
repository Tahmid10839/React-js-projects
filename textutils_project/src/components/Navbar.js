
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const [homeact, setHomeact] = useState("active");
    const [aboutact, setAboutact] = useState("");
    const toggleHomeActive = ()=>{
        setHomeact("active");
        setAboutact("");
    }
    const toggleAboutActive = ()=>{
        setHomeact("");
        setAboutact("active");
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={toggleHomeActive}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${homeact}`} aria-current="page" to="/" onClick={toggleHomeActive}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${aboutact}`} to="/about" onClick={toggleAboutActive}>{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="bg-primary rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleColor('primary')}}>
                        </div>
                        <div className="bg-success mx-2 rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleColor('success')}}>
                        </div>
                        <div className="bg-warning rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleColor('warning')}}>
                        </div>
                        <div className="bg-danger mx-2 rounded" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleColor('danger')}}>
                        </div>
                    </div>
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About Text Here"
}