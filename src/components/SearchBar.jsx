import React from 'react'

const SearchBar = (props) => {
    return (

        <div className='bg-cyan-300 pl-2 h-full flex items-center bg-none'>
            <input value={props.searchQuery} onChange={(e) =>
                props.setSearchQuery(() => (e.target.value))
            } type="text" name="SearchBar" id="SearchBar" placeholder='Search your notes...' className='outline-none' />
        </div>
    )
}

export default SearchBar
