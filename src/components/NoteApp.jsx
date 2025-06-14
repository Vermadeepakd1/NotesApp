import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Note from './Note'

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState("");

    const AddHandler = (e) => {
        e.preventDefault();
        setNotes([note, ...notes]);
        setNote("");
    }

    return (
        <>
            <div className='app-container container flex flex-col items-center justify-between h-dvh background'>
                <Navbar />
                //render all notes here.
                <div className='w-auto h-auto'>
                    {notes.map((note) => (
                        <Note notestext={note} />)
                    )}
                </div>
                <div className='input-box  bg-cyan-100 w-fit'>
                    <input value={note} onChange={(e) => setNote(e.target.value)} type="text" name="note" id="note" placeholder='write your note here....' />
                    <button onClick={AddHandler} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer'>+</button>
                </div>
            </div >

        </>
    )
}

export default NoteApp
