import React from 'react'
import PropTypes from 'prop-types'
import{Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active"  to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                        <li className="nav-item my-2 mx-2">
                            <div className={`form-check  form-switch text-${props.mode == 'light' ? 'dark' : 'light'} `}>
                                <input onClick={props.toggleMode} className={`form-check-input border-${props.mode == 'light' ? 'dark' : 'light'} border-${props.mode == 'light' ? 'dark' : 'light'}`} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
                            </div>
                        </li> <li className="nav-item my-2 mx-2">
                            <div className={`form-check form-switch text-${props.mode == 'light' ? 'dark' : 'light'} `}>
                                <input onClick={props.toggleMode} className={`form-check-input border-${props.mode == 'light' ? 'dark' : 'light'} border-${props.mode == 'light' ? 'dark' : 'light'}`} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
                            </div>
                        </li>

                    </ul>

                </div>
                <div className={`form-check form-switch text-${props.mode == 'light' ? 'dark' : 'light'} `}>
                    <input onClick={props.toggleMode} className={`form-check-input border-${props.mode == 'light' ? 'dark' : 'light'} border-${props.mode == 'light' ? 'dark' : 'light'}`} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
                </div>
            </div>
        </nav>
    )
}


//only to send error if string type data is not entered
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

//if props is not passed then use these values by default
Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'About text here'
};
