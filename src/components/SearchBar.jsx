import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <div className='rowPadding columnMargin'>
      {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
        <input
          type='text'
          className='textInput w3-input w3-border w3-round-large'
          placeholder='🔍 Search'
          style={{minWidth : "80%", maxWidth : "100%" , padding : 15, margin : "0rem 1rem"}}
          
        />
      </div>
    </div>
  )
}
