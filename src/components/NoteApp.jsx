import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import Note from './Note'
import NoteInput from './NoteInput'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import "../App.css"

const NoteApp = () => {
    const [notes, setNotes] = useState(() => (
        JSON.parse(localStorage.getItem('notes')) || []
    ));
    const [note, setNote] = useState("");
    const [newAdded, setNewAdded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [editNoteId, setEditNoteId] = useState("");


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

    const saveHandler = (id, newText) => {
        setNotes((prevNotes) =>
            prevNotes.map(note =>
                note.id === id ? { ...note, note: newText } : note
            )
        );
        setEditNoteId("");
    }

    function filteredContent({ notes, searchQuery }) {
        const filteredItems = notes
            .filter((note) => note.note.toLowerCase().includes(searchQuery.toLowerCase()));


        return (
            <div className={`w-full h-auto flex flex-wrap gap-2 justify-center items-center ${notes.length === 0 ? "" : "overflow-y-auto max-h-[93vh]"}`}>
                {filteredItems.length > 0 ? (
                    filteredItems.map((note) => (
                        <Note
                            key={note.id}
                            noteid={note.id}
                            notestext={note.note}
                            deletenote={handleDelete}
                            notetime={note.notetime}
                            editNoteId={editNoteId}
                            setEditNoteId={setEditNoteId}
                            saveHandler={saveHandler}
                        />))
                ) : (notes.length > 0) ? (
                    <h3 className='text-4xl font-bold text-amber-400 text-center px-4 overflow-hidden'>No results found for "{searchQuery}"</h3>
                ) : ""}
            </div>
        );
    }

    return (
        <>
            <div className='app-container  flex flex-col items-center justify-between h-dvh background'>
                <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                {/* render all notes here. */}




                {(notes.length == 0) &&
                    <div >
                        <h2 className='text-5xl font-bold text-cyan-500 text-center px-4'>No Notes yet..</h2>
                        <h2 className='text-5xl font-bold text-yellow-600 text-center px-4'>Start by writing one...</h2>
                    </div>

                }
                {filteredContent({ notes, searchQuery })}

                {newAdded && <div className='absolute bottom-20 bg-green-500 text-white px-3 rounded-lg font-bold transition-all duration-100 ease-in-out z-10 animate-fade-in animate-fade-out
'>New note added</div>}
                <NoteInput note={note} setNote={setNote} AddHandler={AddHandler} />

            </div >

        </>
    )
}

export default NoteApp
