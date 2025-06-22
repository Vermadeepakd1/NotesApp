import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSave } from "react-icons/md";

const Note = ({ noteid, notestext, deletenote, notetime, editNoteId, setEditNoteId, saveHandler }) => {
    const [editedText, setEditedText] = useState(notestext);
    const [saved, setSaved] = useState(false);
    const inputRef = useRef(null)



    useEffect(() => {
        if (editNoteId === noteid && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editNoteId])




    const editHandler = () => {
        setEditNoteId(noteid)
    }

    const handleSave = () => {
        if (!editedText.trim()) return;
        saveHandler(noteid, editedText)

        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 800);
    }

    return (
        <div id={noteid} className={`h-auto text-center my-1 flex flex-col mx-5 w-full md:w-1/2 lg:w-1/3 min-w-0 ${editNoteId === noteid ? 'bg-amber-300' : 'bg-amber-400'} transition-all duration-500 transform scale-105 hover:scale-100
`}   >
            <div className='flex justify-between items-start min-w-0'>


                <div className='break-words overflow-hidden flex-1 min-w-0'>
                    {editNoteId === noteid ? (
                        <input ref={inputRef} value={editedText} onChange={(e) => (setEditedText(e.target.value))} type="text" name="editnote" id="editnote" className='outline-none bg-amber-200 transition-all duration-300 border-b-2 border-amber-500
' />
                    ) : (<p>{notestext}</p>)}

                </div>

                {
                    editNoteId === noteid ?
                        (<button disabled={!editedText.trim()} onClick={handleSave} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer ml-2 disabled:opacity-50 disabled:cursor-not-allowed'><MdSave /></button>) :
                        (<button onClick={editHandler} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer ml-2'><MdEdit /></button>)
                }

                <button onClick={() => deletenote(noteid)} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer ml-2'><MdDelete /></button>

            </div>
            <div className='bg-amber-200 self-end rounded-lg px-3 mr-0.5'>
                <p>created on: {notetime}</p>
            </div>

            {saved && <div className='absolute bottom-20 bg-green-500 text-white px-3 rounded-lg font-bold transition-all duration-100 ease-in-out z-10 animate-fade-in animate-fade-out
'>Saved Successfully</div>}
        </div>
    )
}

export default Note
