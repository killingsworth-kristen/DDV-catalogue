import React from 'react';
import { Chip } from '@mui/material';
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
        </div>
    )
}