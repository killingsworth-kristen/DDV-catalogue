import React from 'react';
import './css/Navbar.css'
import {Tabs, Tab, Divider} from '@mui/material'


export default function Navbar () {
    return (
        <div className='navbar-container'>
            {/* <Divider className='navbar-divider' sx={{}}/> */}
            <section className='navbar-tabs-container'>
                <Tabs>
                    <Tab className='tabs' value={0} label="Dashboard" sx={{color: "white"}}/>
                    <Tab className='tabs' value={1} label="Browse" sx={{color: "white"}}/>
                    <Tab className='tabs' value={2} label="Stats" sx={{color: "white"}}/>
                    <Tab className='tabs' value={3} label="Lists" sx={{color: "white"}}/>
                </Tabs>
                {/* show first 5 new items */}
                {/* TODO: <Component/> */}
            </section>
            <Divider className='navbar-divider' sx={{}}/>
        </div>
    )
}