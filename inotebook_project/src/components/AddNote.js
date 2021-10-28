import React,{useContext,useState} from 'react'
import NoteContext from '../context/notes/noteContext'
import Notes from './Notes';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    
    
    const [note, setNote] = useState({title: "",description:"",tag:""})
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title: "",description:"",tag:""});
        props.showAlert("Added Successfully","success");
    }
    return (
        <>
            <div>
                <h1 className='my-2'>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} placeholder="Title must be at least 5 characters"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        {/* <input type="text" className="form-control" id="desc" name="desc" onChange={onChange}/> */}
                        <textarea className="form-control" id="description" name="description" rows="3" value={note.description} onChange={onChange} placeholder="Description must be at least 5 characters"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
