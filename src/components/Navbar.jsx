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
        <div className="bg-[#23bab3] w-full flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2">
            <h1 className="my-2 text-center text-lg sm:text-xl md:text-2xl font-bold flex-1">
                NoteIt - A secure place for your notes
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <button
                    onClick={AllClearHandler}
                    disabled={!props.notes?.length}
                    className="bg-orange-400 disabled:opacity-50 outline-none px-4 py-2 cursor-pointer shrink-0 w-1/3 sm:w-auto text-xs sm:text-base whitespace-nowrap"
                >
                    Clear All Notes
                </button>
                <div className="w-2/3 sm:w-auto flex-1">
                    <SearchBar
                        searchQuery={props.searchQuery}
                        setSearchQuery={props.setSearchQuery}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
