import React from 'react'

const Note = ({ noteid, notestext, deletenote, notetime }) => {
    return (
        <div id={noteid} className='h-auto bg-amber-400 text-center my-1 flex flex-col mx-5 w-full md:w-1/2 lg:w-1/3 min-w-0'>
            <div className='flex justify-between items-start min-w-0'>
                <div className='break-words overflow-hidden flex-1 min-w-0'>
                    {notestext}
                </div>
                <button onClick={() => deletenote(noteid)} className='bg-cyan-400 outline-none px-4 py-2 cursor-pointer ml-2'>X</button>
            </div>
            <div className='bg-amber-200 self-end rounded-lg px-3 mr-0.5'>
                <p>created on: {notetime}</p>
            </div>
        </div>
    )
}

export default Note
