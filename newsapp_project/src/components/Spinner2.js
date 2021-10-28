import React, { Component } from 'react'
import loading from './loading.gif'
// import loading2 from './loading2.gif'
// import '../App.css';

const Spinner2 = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading" />
        </div>
        // <div className="text-center">
        //     <img src={loading2} alt="loading2" style={{width: "50px", height: "50px"}} />
        // </div>
        // <div className='loader'>

        // </div>
    )
}
export default Spinner2
