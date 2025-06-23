import React from 'react'
import Note from './Note';
import { MdSearchOff } from "react-icons/md";

const FilteredContent = ({ notes, searchQuery, handleDelete, editNoteId, setEditNoteId, saveHandler }) => {
    const filteredItems = notes
        .filter((note) => note.note.toLowerCase().includes(searchQuery.toLowerCase()));


    return (
        <>

            <div className={`w-full h-auto flex flex-wrap gap-2 justify-center items-center ${notes.length === 0 ? "" : "overflow-y-auto max-h-[93vh]"}`}>

                {filteredItems.length === 0 && searchQuery && (
                    <div className="flex flex-col items-center text-center text-amber-400 fade-in">
                        <MdSearchOff className="text-6xl mb-2" />
                        <h3 className='text-2xl font-bold'>No results found for "{searchQuery}"</h3>
                    </div>
                )}

                {filteredItems.length > 0 && (
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
                )}
            </div>
        </>
    );
}

export default FilteredContent
