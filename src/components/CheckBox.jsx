import React, { useState, useReducer ,useContext } from "react";
import { reverseCamelCase, removeItem } from '../functions/functions';
import itemListContext from '../App'


export default function CheckBox(props) {

  const [isChecked, setisChecked] = useState(false);
  // const {itemListState, updateItemList} = useContext(itemListContext);

  function checkboxClicked() {

    setisChecked(!isChecked);
    console.log(props.category, " is ", !isChecked);
    console.log("initial categories : ", props.itemListState.category);

    const thisCategory = reverseCamelCase(props.category);

    if(!isChecked === true) {
      // props.itemListState.category.push(thisCategory);
      props.updateItemList(
        thisCategory, 
        props.itemListState
      );
    }

    else {
      // removeItem(props.itemListState.category, thisCategory);
      props.updateItemList(
        // thisCategory, 
        "",
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
