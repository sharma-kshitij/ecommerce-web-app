import React from 'react'
import CheckBox from './CheckBox'

const category = "Mens Wear";

const Sidebar = () => {
    return (
        <div className='normalDiv'>Sidebar
            <h1> Categories </h1>
            <CheckBox category={category}/>
            <CheckBox category={category} />
            <CheckBox category={category} />
            <CheckBox category={category} />
            <CheckBox category={category} />
        </div>

    )
}

export default Sidebar