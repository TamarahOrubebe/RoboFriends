import React from 'react';


interface IProps{
    onSearch: VoidFunction
}

const SearchBox = ({onSearch}: IProps) => {

    return (
        <div >

            <input onChange={onSearch} className="pa3 ba b--green bg-lightest-blue" aria-label="searcbox" type="search" name="searchbox" />
        </div>
    )
}


export default SearchBox;