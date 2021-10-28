import React, { useContext, useEffect, useRef,useState } from 'react'
import { useHistory } from 'react-router-dom';
import NoteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, getNotes,editNote } = context;
    let history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            history.push('/login');
        }
    }, [])
    const [note, setNote] = useState({id:"",title: "",description:"",tag:""})
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            title: currentNote.title,
            description: currentNote.description,
            tag: currentNote.tag
        })

    }
    const ref = useRef(null);
    const refClose = useRef(null);
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const handleClick = (e)=>{
        e.preventDefault();
        refClose.current.click();
        editNote(note.id,note.title,note.description,note.tag);
        props.showAlert("Updated Successfully","success");
    }
    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" value={note.title} onChange={onChange} name="title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" id="description" name="description" value={note.description} onChange={onChange} rows="3"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.length<5 || note.description.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-2'>
                <h1 className="mt-3">Your Notes</h1>
                {/* <hr /> */}
                <div className="container">
                    {notes.length===0 && <h6>No notes to display</h6>}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
                })}
            </div>
        </>
    )
}

export default Notes
