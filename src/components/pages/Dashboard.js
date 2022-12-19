import React, {useState, useEffect} from 'react';
import { Chip, LinearProgress } from '@mui/material';
import NewItemsCard from '../NewItemsCard';
import './../css/Dashboard.css';
import API from './../../utils/API';

export default function Dashboard ({furnitureCollection, setFurnitureCollection}) {

    const [newItems, setNewItems] = useState([])

    useEffect(() => {
        API.getAllNewFurniture().then((data)=>{
            const newData = data.slice(0, 5)
            setNewItems(newData)
        });
      },[]);

    let collectedFurniture = 0;

    function handleFurnitureProgress () {
        collectedFurniture = localStorage.getItem('furnitureCollection').length;
        const progressPercentage = collectedFurniture/964
        return progressPercentage
    }
    return (
        <div className='dashboard-container'>
            <section className='new-items'>
                <div className='card-title-new-items'>
                    <h4 id='new-items-h4'>New Items!</h4>
                    <Chip id='new-items-version'label="v 1.2"/>
                </div>
                <div className='new-item-cards'>
                    {newItems.map((item, index)=> 
                        <NewItemsCard 
                            key={item._id} 
                            id={item._id}
                            furnitureName={item.furnitureName} 
                            price={item.price} 
                            obtainedBy={item.obtainedBy} 
                            style={item.style} 
                            furnitureCategory={item.furnitureCategory} 
                            universe={item.universe}
                            furnitureCollection={furnitureCollection}
                            setFurnitureCollection={setFurnitureCollection}
                        />
                    ) }
                </div>
                <a id="see-all-new-item" href='/browse/?added=1.2'>See all</a>
            </section>
            <section className='quick-stats'>
                <div className='quick-stat-display'>
                    <h2>Quick Stats</h2>
                    <div className='crafting-progress-container'>
                        <h4>Crafting:</h4> 
                        <LinearProgress className="progress-bar" id="crafting-progress-bar" variant="determinate" value="10" />
                        <h4>X/Total</h4>
                    </div>
                    <div className='clothing-progress-container'>
                        <h4>Clothing:</h4> 
                        <LinearProgress className="progress-bar" id="clothing-progress-bar" variant="determinate" value="50" />
                        <h4>X/Total</h4>
                    </div>
                    <div className='furniture-progress-container'>
                        <h4>Furniture:</h4> 
                        <LinearProgress className="progress-bar" id="furniture-progress-bar" variant="determinate" value={handleFurnitureProgress} />
                        <h4>{collectedFurniture}/968</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}