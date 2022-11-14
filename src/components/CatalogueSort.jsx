import React from 'react';
import products from '../products.json';
import SearchBar from './SearchBar';

export default function CatalogueSort() {
  return (
    //Todo: remove all css classes and make custom class
    <div>

      <SearchBar />

      <div className='centerDiv rowPadding' style={{margin: "0 1rem"}}>
        <label className='rowMargin columnMargin w3-input'>Sort</label>
        <button className='rowMargin columnMargin btn-selected'>Relevance</button>
        <button className='rowMargin columnMargin'>Popular</button>
        <button className='rowMargin columnMargin'>Latest</button>
        <button className='rowMargin columnMargin'>Latest</button>

      </div>
    </div>
  )
}
