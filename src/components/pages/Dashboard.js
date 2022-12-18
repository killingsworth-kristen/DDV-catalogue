import React from 'react';
import { Chip } from '@mui/material'

export default function Dashboard () {
    return (
        <div className='dashboard-container'>
            <h2>Dashboard</h2>
            <section>
                <h4>New Items!</h4>
                <Chip label="v 1.2"/>
                {/* show first 5 new items */}
                {/* TODO: <Component/> */}
            </section>
        </div>
    )
}