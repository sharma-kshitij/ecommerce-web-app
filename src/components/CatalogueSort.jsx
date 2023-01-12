import React from 'react';
import SearchBar from './SearchBar';

export default function CatalogueSort() {
  return (
    //Todo: remove all css classes and make custom class
    <div className='catalogueHeader'>

      <SearchBar />

      <div className='centerDiv rowPadding catalogue' style={{margin:0}}>
        <label className='catalogueLabel rowMargin columnMargin w3-input'>Sort :</label>
        <button className='rowMargin columnMargin btn-selected'>Relevance</button>
        <button className='rowMargin columnMargin'>Popular</button>
        <button className='rowMargin columnMargin'>Latest</button>
        <button className='rowMargin columnMargin'>Latest</button>
      </div>

      {/* to enable div, disable .searchbar->margin-bottom in css */}
      {/* also set .cardflex-> height: 67.5vh in css */}
    </div>
  )
}
