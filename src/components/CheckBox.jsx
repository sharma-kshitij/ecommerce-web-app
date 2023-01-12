import React, { useState, useReducer ,useContext } from "react";
import { reverseCamelCase, removeItem } from '../functions/functions';
import itemListContext from '../App'

export default function CheckBox(props) {

  const [isChecked, setisChecked] = useState(false);

  // ------------------------------------------------------

  // ! USE CONTEXT NOT WORKING, ENABLE COMMENT BELOW IF YOU CAN MAKE IT WORK
  // ? const {itemListState, updateItemList} = useContext(itemListContext);

  // ------------------------------------------------------

  function checkboxClicked() {

    setisChecked(!isChecked);
    console.log(props.category, " is ", !isChecked);
    console.log("initial categories : ", props.itemListState.category);

    const thisCategory = reverseCamelCase(props.category);
    let categories = [];

    if(!isChecked === true) {
      categories = props.itemListState.category;
      categories.push(thisCategory);
      props.updateItemList(
        categories, 
        props.itemListState
      );
    }

    else {
      categories = props.itemListState.category;
      removeItem(categories, thisCategory);
      props.updateItemList(
        categories, 
        props.itemListState
      );
    }
    
    console.log("final categories : ", props.itemListState.category);
  }

  return (
    <div className={props.category ? 'sidebarDiv' : 'sidebarCenterDiv'}>
      <label className="container" >{props.category}
        <input
          type="checkbox"
          onClick={checkboxClicked}
          checked={isChecked}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}
