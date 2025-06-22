import React from 'react'

const NoteInput = ({ note, setNote, AddHandler }) => {
    return (
        <div className='input-box  bg-cyan-100  w-3/4 mb-5 flex justify-between 
'>
            <input value={note} onChange={(e) => setNote(e.target.value)} type="text" name="note" id="note" placeholder='write your note here....' className='flex-1 px-2 outline-none bg-none min-w-0 focus:ring-2 focus:ring-cyan-500' autoFocus />
            <button onClick={AddHandler} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer shrink-0'>+</button>

        </div>
    )
}

export default NoteInput
