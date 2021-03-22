import React from 'react';
// Using arrow function; creating components recommended way
export const SearchBar=(props)=>{
   return (<div className='form-group'>
        <label>Search</label>
        <input type='text' onChange={props.takeInput} className='form-control' placeholder='Type to Search an Image'></input>
        <button onClick={props.btClick} className= 'btn btn-primary'>Search Now</button>
    </div>)
};   //Anonymous Function
