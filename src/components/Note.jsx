import React from 'react'
import { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdSave } from "react-icons/md";

const Note = ({ noteid, notestext, deletenote, notetime, editNoteId, setEditNoteId, saveHandler }) => {
    const [editedText, setEditedText] = useState(notestext);



    const editHandler = () => {
        setEditNoteId(noteid)
    }

    return (
        <div id={noteid} className='h-auto bg-amber-400 text-center my-1 flex flex-col mx-5 w-full md:w-1/2 lg:w-1/3 min-w-0'>
            <div className='flex justify-between items-start min-w-0'>


                <div className='break-words overflow-hidden flex-1 min-w-0'>
                    {editNoteId === noteid ? (
                        <input value={editedText} onChange={(e) => (setEditedText(e.target.value))} type="text" name="editnote" id="editnote" className='outline-none bg-amber-300' />
                    ) : (<p>{notestext}</p>)}

                </div>

                {
                    editNoteId === noteid ?
                        (<button onClick={() => saveHandler(noteid, editedText)} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer ml-2'><MdSave /></button>) :
                        (<button onClick={editHandler} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer ml-2'><MdEdit /></button>)
                }

                <button onClick={() => deletenote(noteid)} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer ml-2'><MdDelete /></button>

            </div>
            <div className='bg-amber-200 self-end rounded-lg px-3 mr-0.5'>
                <p>created on: {notetime}</p>
            </div>
        </div>
    )
}

export default Note
