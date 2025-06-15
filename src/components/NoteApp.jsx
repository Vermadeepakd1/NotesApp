import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Note from './Note'
import { v4 as uuidv4 } from 'uuid';

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState("");

    const handleDelete = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    const AddHandler = (e) => {
        e.preventDefault();
        setNotes([{
            id: uuidv4(),
            note: note,
        }, ...notes]);
        setNote("");
    }

    return (
        <>
            <div className='app-container  flex flex-col items-center justify-between h-dvh background'>
                <Navbar />
                {/* render all notes here. */}
                <div className='w-full h-auto flex flex-wrap gap-2 justify-center items-center overflow-auto'>
                    {notes.map((note) => (
                        <Note key={uuidv4()} noteid={note.id} notestext={note.note} deletenote={handleDelete} />)
                    )}
                </div>
                <div className='input-box  bg-cyan-100  w-3/4 mb-5 flex justify-between'>
                    <input value={note} onChange={(e) => setNote(e.target.value)} type="text" name="note" id="note" placeholder='write your note here....' className='flex-1 px-2 outline-none bg-none min-w-0' />
                    <button onClick={AddHandler} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer shrink-0'>+</button>

                </div>
            </div >

        </>
    )
}

export default NoteApp
