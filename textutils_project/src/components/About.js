import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btnText, setbtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === "black"){
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
    return (
        <>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={{border: props.mode==='dark'?'1px solid white':'1px solid black'}} >
                <div className="accordion-item" style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode==='dark'?'rgb(3 4 20)':'white'}}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode==='dark'?'rgb(3 4 20)':'white',borderBottom: props.mode==='dark'?'1px solid white':'1px solid black'}} aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{borderBottom: props.mode==='dark'?'1px solid white':'1px solid black'}}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. It also helps to count the words and characters. It calculates the time needed to read a word separately for the slow,average and fast reader.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode==='dark'?'rgb(3 4 20)':'white'}}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode==='dark'?'rgb(3 4 20)':'white',borderBottom: props.mode==='dark'?'1px solid white':'1px solid black'}}>
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{borderBottom: props.mode==='dark'?'1px solid white':'1px solid black'}}>
                            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode==='dark'?'rgb(3 4 20)':'white'}}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode==='dark'?'rgb(3 4 20)':'white',boxSizing:'border-box',borderBottom: props.mode==='dark'?'0.5px solid white':'0.5px solid black'}}>
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorere, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button> */}
        </div>
        </>
    )
}
