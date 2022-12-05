import products from './products.json';
import {filterList} from './functions/functions';
import React, { useReducer, useState } from 'react';

// ----------------STATE & ACTIONS FOR REDUCER----------------

export const ACTIONS = {
    TOGGLE_CATEGORY : "toogle-category",
}

export const initialItemListState = {
    itemList:products,
    category:""
    // category:[]
}

// -------------REDUCER FUNCTIONS FOR ITEMLIST--------------

export function itemListReducer (itemListState, action) {

    switch (action.type) {
        case ACTIONS.TOGGLE_CATEGORY:
            return(
                {
                  itemList: filterList(
                      initialItemListState.itemList,
                      itemListState.itemList, 
                      action.payload.category
                      ), 
                  category: action.payload.category
                }
            );
    
        default:
            return itemListState;
    }
}
