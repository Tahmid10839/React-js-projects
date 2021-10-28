import React,{useContext,useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () => {
    // const a = useContext(NoteContext);
    // useEffect(() => {
    //     a.update();
    // }, [])
    return (
        <div className='container my-3'>
           {/* This is About {a.state.name} and he is in class {a.state.class} */}
           This is About page
        </div>
    )
}

export default About
