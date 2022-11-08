import React from 'react'
import CheckBox from './CheckBox'
import products from '../products.json'

let existingCategories = [];

products.forEach(element => {
    console.log(element.category);
    if (!existingCategories.find((a) => {
            return a == element.category
        })) {
        existingCategories.push(element.category);
    }
});

function camelCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/^(.)/, function (b) {
            return b.toUpperCase();
        });
}

const Sidebar = () => {
    return (
        <div className='normalDiv sidebarBorder'>
            <div className='sidebarDiv '>
                <h1>Filter</h1>
            </div>

            <hr/>

            <div className='sidebarDiv'>
                <h1> Categories </h1>
                {
                    existingCategories.map(element => {
                        return(<CheckBox category={camelCase(element)}/>)
                })
                }
            </div>

            <hr/>

            <div className = 'sidebarDiv'>
                <h1> Price Range </h1> 
            </div>

            <div className='centerDiv'>
                <input 
                    type='text' 
                    className='textInput'
                    placeholder='Min'    
                />
            </div>  

            <div className='centerDiv'>
                <button> Set Price </button>
            </div>    
            
            
            

        </div>

    )
}

export default Sidebar