import React from 'react'
import CheckBox from './CheckBox'

const category = "Mens Wear";

const Sidebar = () => {
    return (
        <div className='sidebarDiv sidebarBorder'>
            <div className='sidebarDiv sidebarBorder'><h1>Filter</h1></div>
            <h1> Categories </h1>
            <CheckBox category={category} />
            <CheckBox category={category} />
            <CheckBox category={category} />
            <CheckBox category={category} />
            <CheckBox category={category} />
            <hr/>
        </div>

    )
}

export default Sidebar