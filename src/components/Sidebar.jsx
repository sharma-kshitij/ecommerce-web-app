import React from 'react'
import CheckBox from './CheckBox'
import products from '../products.json'
import Rating from 'react-star-rating-lite'
import { camelCase } from '../functions/functions';
import { useState } from "react";



const Sidebar = () => {

    let existingCategories = [];

    products.forEach(element => {
        if (!existingCategories.find((a) => {
            return a === element.category
        })) {
            existingCategories.push(element.category);
        }
    });

    const [ratingCheckBox, setratingCheckBox] = useState(false);

    return (
        <div className='normalDiv sidebarBorder'>
            <div className='sidebarDiv '>
                <h1>Filter</h1>
            </div>

            <hr />

            <div className='sidebarDiv'>
                <h1> Categories </h1>
                {
                    existingCategories.map(element => {
                        console.log("elements are:", element);
                        return (<CheckBox
                            key={Date.now()}
                            category={camelCase(element)} />)
                    })
                }
            </div>

            <hr />

            <div className='sidebarDiv'>
                <h1> Price Range </h1>
            </div>

            <div className='centerDiv rowPadding'>
                <input
                    type='text'
                    className='textInput w3-input w3-border w3-round-large'
                    placeholder='Min'
                />
                <input
                    type='text'
                    className='textInput w3-input w3-border w3-round-large'
                    placeholder='Max'
                />
            </div>

            <div className='centerDiv' style={{ marginBottom: 30 }}>
                <button> Set Price </button>
            </div>

            <hr />

            <div className='sidebarDiv'>
                <h1> Rating </h1>
            </div>

            <div className='centerDiv'>
                <CheckBox
                    onClick={() => {
                        setratingCheckBox(!ratingCheckBox)
                    }}
                />
                <Rating
                    className='sidebarRating'
                    weight='20'
                    readonly={() => { return ratingCheckBox ? false : true }}
                    onClick={(ratedValue) => { console.log(ratedValue) }}
                />
            </div>
            <hr />

        </div>

    )
};

export default Sidebar;