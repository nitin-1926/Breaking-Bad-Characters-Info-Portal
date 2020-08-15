import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChangeText = value => {
        setText(value);
        getQuery(value);
    }

    return (
        <section className='search'>
            <form>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search Any Character'  
                    value={text}
                    onChange={ (e) => onChangeText(e.target.value) }                  
                    autoFocus
                />
            </form>
        </section>
    );
}

export default Search;
