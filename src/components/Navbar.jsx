import React from 'react'
import SearchBar from './SearchBar'

const Navbar = (props) => {
    return (
        <div className='bg-[#23bab3] text-center w-screen h-12 flex justify-between items-center px-4'>
            <h1 className='my-2'>NoteIt - A secure place for your notes</h1>
            <SearchBar {...props} />
        </div>
    )
}

export default Navbar
