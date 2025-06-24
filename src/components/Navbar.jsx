import React from 'react'
import SearchBar from './SearchBar'

const Navbar = (props) => {

    const AllClearHandler = () => {
        const confirmed = window.confirm("Are you sure you want to delete all notes?");
        if (confirmed) {
            props.setNotes([]);
            localStorage.removeItem('notes');
        }
    }
    return (
        <div className='bg-[#23bab3] text-center w-screen h-12 flex justify-between items-center px-4'>
            <h1 className='my-2'>NoteIt - A secure place for your notes</h1>
            <button
                onClick={AllClearHandler}
                disabled={!props.notes?.length}
                className='bg-orange-400 disabled:opacity-50 outline-none px-4 py-2 cursor-pointer shrink-0'
            >
                Clear All Notes
            </button>
            <SearchBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} />
        </div>
    )
}

export default Navbar
