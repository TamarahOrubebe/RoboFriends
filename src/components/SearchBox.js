import React from 'react';


const SearchBox = ({onSearch}) => {

    return (
        <div >

            <input onChange={onSearch} className="pa3 ba b--green bg-lightest-blue" aria-label="searcbox" type="search" name="searchbox" />
        </div>
    )
}


export default SearchBox;