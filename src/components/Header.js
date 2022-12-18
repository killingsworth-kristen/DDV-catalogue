import React from 'react';
import './css/Header.css'
import { Drawer, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


export default function Header () {
    return (
        <div className='header-container'>
            <h1>Disney Dreamlight Valley Catalogue</h1>
            <section className='header-form'>
                <form className='header-form'>
                    <input id="header-search-input" type="text" placeholder='search'/>
                    <Button id="header-search-btn">Search</Button>
                </form>
            </section>
            <Button>
                <MenuIcon id="hamburger-menu"/>
            </Button>
            <Drawer>

            </Drawer>
        </div>
    )
}