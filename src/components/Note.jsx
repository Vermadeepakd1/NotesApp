import React from 'react'

const Note = ({ noteid, notestext, deletenote }) => {
    return (
        <div id={noteid} className='h-auto bg-amber-400 text-center my-1 flex mx-5 sm:w-full md:w-1/2 lg:w-1/3'>
            <div className='sm:h-auto md:w-full h-auto break-words overflow-hidden flex-1'>
                {notestext}
            </div>
            <button onClick={() => deletenote(noteid)} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer h-full'>X</button>
        </div>
    )
}

export default Note
