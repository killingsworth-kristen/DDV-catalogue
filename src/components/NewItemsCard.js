import React, {useState} from "react";
import './css/NewItemsCard.css'

import { Chip, Button } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

export default function Card ({furnitureName, price, obtainedBy, style, furnitureCategory, universe, id, setFurnitureCollection, furnitureCollection, image}) {

    function handleAddCollection (e) {
        const itemId = e.target.id.split('-')[1]
        const oldCollection = JSON.parse(localStorage.getItem('furnitureCollection'))
        console.log(oldCollection)
        console.log(oldCollection.furnitureId)
        console.log(itemId)
        // const newFurnitureCollection = oldCollection.furnitureId.push(itemId)
        // console.log(newFurnitureCollection)
        // setFurnitureCollection(newFurnitureCollection)
        // localStorage.setItem('furnitureCollection', furnitureCollection)
    }

    function handleAddList (e) {
        console.log(e.target.id)
        const itemId = e.target.id.split('-')[1]
        console.log(itemId)
    }

    return (
        <div className="card-container">
            <h4 className="new-items-title">{furnitureName}</h4>
            <div className="new-items-img-uni">
                <p className="new-items-universe-banner">{universe}</p>
                <img src={image} alt={furnitureName}/>
            </div>
            <div className="new-item-actions">
                <LibraryAddIcon onClick={handleAddCollection} id={`collection-${id}`} className="library-add furniture"/>
                <LibraryAddCheckIcon className="library-added furniture hidden"/>
                <BookmarkAddIcon onClick={handleAddList} id={`list-${id}`}className="list-add furniture"/>
                <BookmarkAddedIcon className="list-added furniture hidden"/>
            </div>
            <div className="new-item-tags">
                {style.map((tag, index)=> 
                    <Chip className='new-items-style'label={tag} key={index} sx={{backgroundColor:"var(--lightGold)"}}/>
                )}
                {furnitureCategory.map((tag, index)=> 
                    <Chip className='new-items-category'label={tag} key={index} sx={{backgroundColor:"var(--darkGold)"}}/>
                )}
            </div>
            
        </div>
    )
}