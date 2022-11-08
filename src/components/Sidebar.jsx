import React from 'react'
import CheckBox from './CheckBox'
import products from '../products.json'
import { Rating } from 'react-simple-star-rating';
import { camelCase } from '../functions/functions';

let existingCategories = [];

products.forEach(element => {
    if (!existingCategories.find((a) => {
            return a == element.category
        })) {
        existingCategories.push(element.category);
    }
});


// function 

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
                        console.log("elements are:" ,element);
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

            <div className='centerDiv' style={{marginBottom:30}}>
                <button> Set Price </button>
            </div>    
            
            <hr/>
            
            <div className = 'sidebarDiv'>
                <h1> Rating </h1> 
            </div>

            <div className='centerDiv'>
                <CheckBox />
                <Rating 
                    className='sidebarRating'
                    weight="5"
                    onClick={(ratedValue) => {console.log(ratedValue)}}
                />
            </div>   
            <hr/>
            
        </div>

    )
}

export default Sidebar;