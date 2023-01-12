import React, { useState, useReducer, createContext } from 'react';
import Catalogue from './components/Catalogue';
import DetailsBar from './components/DetailsBar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {ACTIONS, initialItemListState, itemListReducer} from './ItemListReducer';
import './App.css';

// ----------------------APP COMPONENT-----------------------

export const itemListContext = createContext();

export default function App() {

    const [itemListState, dispatch] = useReducer(itemListReducer, initialItemListState);

    function updateItemList(category, itemListState) {
        dispatch({
        type : ACTIONS.TOGGLE_CATEGORY, 
        payload : {itemList : itemListState.itemList, category : category}
        });
    }

    function updateListRating(rating) {
        dispatch({
        type : ACTIONS.TOGGLE_RATING,
        payload : {itemList :itemListState.itemList, rating : rating}
        });
    }

    return (
            <div className="App">
                <Navbar />
                <div className="main_content">
                <itemListContext.Provider 
                    value={{itemListState, updateItemList}}>
                    <Sidebar itemListState={itemListState} updateItemList={updateItemList}
                            updateListRating={updateListRating}
                    />
                    <Catalogue itemList={itemListState.itemList} />
                </itemListContext.Provider>
                    <DetailsBar />
                </div>
            </div>
    )
}
