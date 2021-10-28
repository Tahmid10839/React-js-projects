
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    // const s1 = {
    //     "name":"Tahmid",
    //     "class": "3A"
    // }
    // const [state, setstate] = useState(s1);
    // const update = ()=>{
    //     setTimeout(() => {
    //         setstate({
    //             "name":"Rahim",
    //             "class": "3B"
    //         })
    //     }, 1000);
    // }
    const host = "http://localhost:5000";
    // const notesInitial = [
    //     {
    //         "_id": "61520086bf88d0790b523a2a",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:33:58.926Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "615200f537b2814381e0518d",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:35:49.379Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "61520086bf88d0790b523a2b",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:33:58.926Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "615200f537b2814381e0518c",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:35:49.379Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "61520086bf88d0790b523a2g",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:33:58.926Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "615200f537b2814381e0518e",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:35:49.379Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "61520086bf88d0790b523a2h",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:33:58.926Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "615200f537b2814381e0518j",
    //         "user": "6151f1e6e3e22f55162c1ad6",
    //         "title": "My Title2",
    //         "description": "Please do exercise daily",
    //         "tag": "Personal",
    //         "date": "2021-09-27T17:35:49.379Z",
    //         "__v": 0
    //     },
    // ]
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Fet all notes
    const getNotes = async() => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        // console.log(json);
        setNotes(json);
    }

    // Add a note
    const addNote = async(title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = await response.json();
        // const note = {
        //     "_id": "615200f537b2814381e0518u",
        //     "user": "6151f1e6e3e22f55162c1ad6",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": Date.now(),
        //     "__v": 0
        // };
        setNotes(notes.concat(json))
        // console.log(notes);
    }

    // Delete a note
    const deleteNote = async(id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        // console.log("Deleting the note with id "+id);
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        });
        // const json = await response.json();

        // for (let index = 0; index < notes.length; index++) {
        //     const element = notes[index];
        //     if (element._id === id) {
        //         element.title = json.title;
        //         element.description = json.description;
        //         element.tag = json.tag;
        //     }
        // }
        // getNotes();

        const newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
                break;
            }
        }
        setNotes(newNotes);
        
    }
    return (
        // <NoteContext.Provider value={{state,update}}>
        //     {props.children}
        // </NoteContext.Provider>
        <NoteContext.Provider value={{ notes, getNotes,addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;