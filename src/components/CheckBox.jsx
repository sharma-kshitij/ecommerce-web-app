import React from 'react'
import { useState } from "react";

export default function CheckBox(props) {

  const [isChecked, setisChecked] = useState(false)

  // props.fetchIsChecked(isChecked);

  return (
    <div className={props.category ? 'sidebarDiv' : 'sidebarCenterDiv'}>
      <label className="container" >{props.category}
        <input
          type="checkbox"
          onClick={
            () => {
              setisChecked(!isChecked)
            }
          }
          checked={isChecked}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}
