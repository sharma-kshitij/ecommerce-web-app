import React from 'react'
import { useState } from "react";
import { CamelCase } from '../functions/functions';

export default function CheckBox({category}) {

  const [isChecked, setisChecked] = useState(false)
  console.log( "category is" ,category)

  return (
    <div className={category ? 'sidebarDiv' : 'sidebarCenterDiv'}>
      <label className="container" >{category} 
        <input type="checkbox" onClick={() => {setisChecked(!isChecked) }} checked={isChecked} />
          <span className="checkmark"></span>
      </label>
    </div>
  )
}
