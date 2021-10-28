
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchUser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// Route-1: Fetch all the notes using GET: api/notes/fetchallnotes - Login required
router.get('/fetchallnotes',fetchuser,async(req,res)=>{
    // obj = {
    //     a: "Rahim",
    //     number: 80
    // }
    // res.json(obj);
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})
// Route-2: Add the notes using POST: api/notes/addnote - Login required
router.post('/addnote',fetchuser,[
    body('title',"The title must be at least 3 characters").isLength({ min: 3 }),
    body('description',"Description must be at least 5 characters").isLength({ min: 5 })
],async(req,res)=>{

    try {
        const {title,description,tag} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const saveNote = await note.save();
        res.json(saveNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})

// Route-3: Update an existing note using PUT: api/notes/updatenote/:id - Login required
router.put('/updatenote/:id',fetchuser,async(req,res)=>{

    const {title,description,tag} = req.body;
    //Create a new note object
    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")};
    
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true})
    res.json({note});

})

// Route-4: Delete an existing note using DELETE: api/notes/deletenote/:id - Login required
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{

    // Find the note to delete it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")};
    
    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({"Success":"Note has been deleted",note:note});

})

module.exports = router;