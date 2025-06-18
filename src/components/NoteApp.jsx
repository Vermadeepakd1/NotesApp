import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Note from './Note'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const NoteApp = () => {
    const [notes, setNotes] = useState(() => (
        JSON.parse(localStorage.getItem('notes')) || []
    ));
    const [note, setNote] = useState("");
    const [newAdded, setNewAdded] = useState(false);


    useEffect(() => {

        localStorage.setItem('notes', JSON.stringify(notes));

    }, [notes])


    const handleDelete = (id) => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    const AddHandler = (e) => {
        e.preventDefault();
        if (!note.trim()) return;
        const time = new Date();
        const notetime = time.toLocaleString();
        setNotes([{
            id: uuidv4(),
            note: note,
            notetime: notetime,
        }, ...notes]);
        setNote("");


        setNewAdded(true);
        setTimeout(() => {
            setNewAdded(false)
        }, 800);
    }

    return (
        <>
            <div className='app-container  flex flex-col items-center justify-between h-dvh background'>
                <Navbar />
                {/* render all notes here. */}


                <div className={`w-full h-auto flex flex-wrap gap-2 justify-center items-center ${notes.length === 0 ? "" : "overflow-y-auto max-h-[93vh]"}`} >

                    {(notes.length == 0) &&
                        <div >
                            <h2 className='text-5xl font-bold text-cyan-500 '>No Notes yet..</h2>
                            <h2 className='text-5xl font-bold text-yellow-600 '>Start by writing one...</h2>
                        </div>

                    }

                    {notes.map((note) => (
                        <Note key={note.id} noteid={note.id} notestext={note.note} deletenote={handleDelete} notetime={note.notetime} />)
                    )}
                </div>
                {newAdded && <div className='absolute bottom-20 bg-green-500 text-white px-3 rounded-lg font-bold transition-all duration-100 ease-in-out z-10'>New note added</div>}
                <div className='input-box  bg-cyan-100  w-3/4 mb-5 flex justify-between'>
                    <input value={note} onChange={(e) => setNote(e.target.value)} type="text" name="note" id="note" placeholder='write your note here....' className='flex-1 px-2 outline-none bg-none min-w-0' autoFocus />
                    <button onClick={AddHandler} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer shrink-0'>+</button>

                </div>
            </div >

        </>
    )
}

export default NoteApp
