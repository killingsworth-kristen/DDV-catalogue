import React from 'react';
import { Chip, LinearProgress } from '@mui/material';
import Card from './../Card';
import './../css/Dashboard.css';

export default function Dashboard () {
    return (
        <div className='dashboard-container'>
            <section className='new-items'>
                <div className='card-title-new-items'>
                    <h4 id='new-items-h4'>New Items!</h4>
                    <Chip id='new-items-version'label="v 1.2"/>
                </div>
                <div className='new-item-cards'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
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
                        <LinearProgress className="progress-bar" id="furniture-progress-bar" variant="determinate" value="90" />
                        <h4>X/Total</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}