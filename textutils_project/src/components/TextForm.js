import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // const [btnText, setbtnText] = useState("Enable Dark Mode");
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    const handleUpClick = () => {
        // if(text.length>0){
        //     let newText = text.toUpperCase();
        //     setText(newText);
        //     props.showAlert("Converted to Uppercase",'success');
        // }
        // else{
        //     props.showAlert("Write something in the textarea box",'warning');
        // }
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase",'success');
    }
    const handleLowClick = () => {
        // if(text.length>0){
        //     let newText = text.toLowerCase();
        //     setText(newText);
        //     props.showAlert("Converted to Lowercase",'success');
        // }
        // else{
        //     props.showAlert("Write something in the textarea box",'warning');
        // }
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase",'success');
    }
    const handleClearClick = () => {
        // if(text.length>0){
        //     let newText = "";
        //     setText(newText);
        //     props.showAlert("Text cleared",'success');
        // }
        // else{
        //     props.showAlert("Write something in the textarea box",'warning');
        // }
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared",'success');
    }
    const handleCopy = () => {
        // if(text.length>0){
        //     let text = document.getElementById('myBox');
        //     text.select();
        //     navigator.clipboard.writeText(text.value);
        //     props.showAlert("Copied",'success');
        // }
        // else{
        //     props.showAlert("Write something in the textarea box",'warning');
        // }
        // let text = document.getElementById('myBox');
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied",'success');
    }
    const handleExtraSpace = () => {
        // if(text.length>0){
        //     let newtext = text.split(/[ ]+/);
        //     setText(newtext.join(" "));
        //     props.showAlert("Removed extra spaces",'success');
        // }
        // else{
        //     props.showAlert("Write something in the textarea box",'warning');
        // }
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed extra spaces",'success');
    }
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         });
    //         setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setbtnText("Enable Dark Mode");
    //     }
    // }
    // const handleBoldClick = ()=>{
    //     document.getElementById("myBox").style.fontWeight = "900";
    // }
    // const handleNormalClick = ()=>{
    //     document.getElementById("myBox").style.fontStyle = "normal";
    // }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <div className="container">
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" rows="10" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode === 'dark'?'rgb(3 4 20)':'white',color: props.mode === 'dark'?'white':'black'}}></textarea>
                    </div>
                    <button disabled={text.length===0} className={`btn btn-${props.colorPicker==='primary'?'success':'primary'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className={`btn btn-${props.colorPicker==='primary'?'success':'primary'} mx-1`} onClick={handleLowClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className={`btn btn-${props.colorPicker==='primary'?'success':'primary'} mx-1`} onClick={handleExtraSpace}>Remove Extra Space</button>
                    <button disabled={text.length===0} className={`btn btn-${props.colorPicker==='primary'?'success':'primary'} mx-1`} onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className={`btn btn-${props.colorPicker==='primary'?'success':'primary'} mx-1`} onClick={handleClearClick}>Clear Text</button>
                    {/* <button className="btn btn-primary mx-1" onClick={toggleStyle}>{btnText}</button> */}
                    {/* <button className="btn btn-primary mx-2" onClick={handleBoldClick}>Bold</button>
            <button className="btn btn-primary mx-2" onClick={handleNormalClick}>Normal</button> */}
                </div>
                <div className="container my-3">
                    <h2>Your Text summary</h2>
                    <p className="my-1">{text.length>0?text.split(/\S+/g).length-1:0} words and {text.length>0?text.length:0} characters</p>
                    <p className="my-1">{text.length>0?((text.split(/\S+/g).length-1) * 0.008).toFixed(3):0} minutes to read for the slow reader</p>
                    <p className="my-1">{text.length>0?((text.split(/\S+/g).length-1) * 0.0032).toFixed(3):0} minutes to read for the average reader</p>
                    <p>{text.length>0?((text.split(/\S+/g).length-1) * 0.0024).toFixed(3):0} minutes to read for the fast reader</p>
                    <h2 className="my-1">Preview</h2>
                    <p>{text.length>0 ? text : "Nothing to preview"}</p>
                </div>
            </div>
        </>
    )
}
