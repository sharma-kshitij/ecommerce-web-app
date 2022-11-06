import React from 'react'
import { useState } from "react";


export default function CheckBox({category}) {

  const [isChecked, setisChecked] = useState(false)

  return (
    <div className="normalDiv">
      <label className="container" >Gardening 
        <input type="checkbox" onClick={() => { setisChecked(!isChecked) }} checked={isChecked} />
          <span className="checkmark"></span>
      </label>
    </div>
  )
}
