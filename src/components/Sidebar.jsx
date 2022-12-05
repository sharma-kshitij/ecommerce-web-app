import React from 'react';
import CheckBox from './CheckBox';
import Rating from 'react-star-rating-lite';
import { camelCase } from '../functions/functions';
import { useState, useContext } from "react";
import itemListContext from '../App';
import products from '../products.json'


const Sidebar = ({itemListState,updateItemList}) => {

// -----------------FILTERING CATEGORIES------------------

    let existingCategories = [];

    products.forEach(element => {
        if (!existingCategories.find((a) => {
            return a === element.category
        })) {
            existingCategories.push(element.category);
        }
    });

// -------------------COMPONENT STATE--------------------

    const [ratingCheckBox, setratingCheckBox] = useState(false);
    const [ratedValue, setratedValue] = useState(1);

    return (
        <div className='normalDiv sidebarBorder'>

    {/* -----------------"FILTER" DIV------------------ */}
            <div className='sidebarDiv '>
                <h1>Filter</h1>
            </div>

            <hr />
            
    {/* -------------"CATEGORIES" CHECKBOXES------------ */}

            <div className='sidebarDiv'>
                <h1> Categories </h1>
                {
                    existingCategories.map(element => {
                        
                        return (<CheckBox 
                            key={existingCategories.indexOf(element)}
                            category={camelCase(element)}
                            itemListState={itemListState}
                            updateItemList={updateItemList}
                        />)

                    })
                }
            </div>

            <hr />

    {/* --------------"PRICE RANGE" INPUTS------------- */}

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

    {/* ------------"RATING" STARS & CHECKBOX---------- */}

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
                    onChange={(ratedValue) => { console.log(ratedValue) }}
                    value={ratedValue.toString()}
                />
            </div>
            <hr />

        </div>

    )
};

export default Sidebar;