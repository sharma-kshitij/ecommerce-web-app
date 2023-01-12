import products from './products.json';
import { filterListByCategory, filterListByRating } from './functions/functions';
import React, { useReducer, useState } from 'react';

// ----------------STATE & ACTIONS FOR REDUCER----------------

export const ACTIONS = {
    TOGGLE_CATEGORY : "toggle-category",
    TOOGLE_RATING: "toggle-rating"
}

export const initialItemListState = {
    itemList : products,
    category : ["none"],
    rating : 0
}

// -------------REDUCER FUNCTIONS FOR ITEMLIST--------------

export function itemListReducer (itemListState, action) {

    switch (action.type) {
        case ACTIONS.TOGGLE_CATEGORY:
            return(
                {
                  itemList: filterListByCategory(
                      initialItemListState.itemList,
                      itemListState, 
                      action.payload.category
                      ), 
                  category: action.payload.category,
                  rating: itemListState.rating
                }
            );

        case ACTIONS.TOGGLE_RATING:
            return(
                {
                    itemList: filterListByRating(
                        initialItemListState.itemList,
                        itemListState,
                        action.payload.rating
                    ),
                    category: itemListState.category,
                    rating: action.payload.rating,
                }
            )
    
        default:
            return itemListState;
    }
}
