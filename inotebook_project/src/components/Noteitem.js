import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note,updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h5>{note.tag}</h5>
                        <div>
                            <i className="fas fa-edit mx-3" onClick={()=>{updateNote(note)}}></i>
                            <i className="far fa-trash-alt" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully","success");}}></i>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer text-muted">
                    {new Date(note.date).toGMTString()}
                </div>
            </div>
        </div>
    )
}

export default Noteitem
