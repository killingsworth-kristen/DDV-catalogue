import React from 'react';
import { redirect } from 'react-router-dom'
import './css/Navbar.css'
import {Tabs, Tab, Divider} from '@mui/material'


export default function Navbar () {
    return (
        <>
            <div className='navbar-container'>
                {/* <Divider className='navbar-divider' sx={{}}/> */}
                <section className='navbar-tabs-container'>
                    <a className='tabs' href="http://localhost:3000/">Dashboard</a>
                    <a className='tabs' href="http://localhost:3000/browse">Browse</a>
                    <a className='tabs' href="http://localhost:3000/stats">Stats</a>
                    <a className='tabs' href="http://localhost:3000/lists">Lists</a>
                </section>
            </div>
            <Divider className='navbar-divider' sx={{}}/>
        </>
    )
}