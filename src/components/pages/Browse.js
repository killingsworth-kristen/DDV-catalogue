import React, {useState} from 'react';

import './../css/Browse.css'

import { Accordion, AccordionSummary, AccordionDetails, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Browse () {
    // declare state of all filter values
    // universe states
    const [mickeyState, setMickeyState] = useState(false)
    const [swordState, setSwordState] = useState(false)
    const [walleState, setWalleState] = useState(false)
    const [moanaState, setMoanaState] = useState(false)
    const [ratatouilleState, setRatatouilleState] = useState(false)
    const [beautyState, setBeautyState] = useState(false)
    const [wreckState, setWreckState] = useState(false)
    const [cinderellaState, setCinderellaState] = useState(false)
    const [lionState, setLionState] = useState(false)
    const [mermaidState, setMermaidState] = useState(false)
    const [frozenState, setFrozenState] = useState(false)
    const [tangledState, setTangledState] = useState(false)
    const [monstersState, setMonstersState] = useState(false)
    const [toyState, setToyState] = useState(false)
    const [liloState, setLiloState] = useState(false)
    const [incredibesState, setIncrediblesState] = useState(false)
    const [herculesState, setHerculesState] = useState(false)
    const [cocoState, setCocoState] = useState(false)
    const [carsState, setCarsState] = useState(false)
    const [lightyearState, setLightyearState] = useState(false)
    const [upState, setUpState] = useState(false)
    const [sleepingState, setSleepingState] = useState(false)
    const [snowState, setSnowState] = useState(false)
    const [generalState, setGeneralState] = useState(false)




    return (
        <div className='browse-conatainer'>
            <aside className='browse-filter-container'>
                <h3>Filters:</h3>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="universe-content"
                            id="universe-header"
                        >
                            <h4>Universe</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Mickey & Friends" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="The Sword in the Stone" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="WALL-E" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Moana" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Ratatouille" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Beauty and the Beast" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Wreck-It Raplph" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Cinderella" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="The Lion King" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="The Little Mermaid" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Frozen" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Tangled" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Monsters, Inc." />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Toy Story" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Lilo & Stitch" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="The Incredibles" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Hercules" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Coco" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Cars" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Lightyear" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Up" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Sleeping Beauty" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="Snow White" />
                                <FormControlLabel control={<Checkbox sx={{color: '#3F48AC'}}/>} label="General" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="category-content"
                            id="category-header"
                        >
                            <h4>Category</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Essentials"/>
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Decor" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Trimmings" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Tables" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Beds" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Seating" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Storage" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Appliance" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Electronics" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Utilities" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Art" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Lighting" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Foliage" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Rugs" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Misc." />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Wallpaper" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Floors" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Doors" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Windows" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Wall" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Ceiling" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="zone-content"
                            id="zone-header"
                        >
                            <h4>Zone</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Bedroom" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Bathroom" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Living Room" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Dining Room" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Kitchen" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Outdoors" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Rec Room" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Study" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="style-content"
                            id="style-header"
                        >
                            <h4>Style</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Bold" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Casual" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Cute" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Elegant" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Futuristic" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Modern" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Professional" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Quirky" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Rustic" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Sporty" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Traditional" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="added-content"
                            id="added-header"
                        >
                            <h4>Added</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="1.0" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="1.1" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="1.2" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="obtained-by-content"
                            id="obtained-by-header"
                        >
                            <h4>Obtained by</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Founder's Pack: Standard Edition" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Founder's Pack: Deluxe Edition" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Founder's Pack: Ultimate Edition" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Friendship" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Pixar Star Path" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Villain's Star Path" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Festive Star Path" />
                                <FormControlLabel control={<Checkbox className='filter-checkbox' sx={{color: '#3F48AC'}}/>} label="Special Tasks" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
            </aside>
            <div className='browse-right-container'>
                <div className='broswe-form-container'>
                    <form className='browse-form'>
                        {/* TODO: make search work (needs functions/useState); queries multiple collections (not just furniture) */}
                        <input id="browse-search-input" type="text" placeholder='search'/>
                        <Button id="browse-search-btn">Search</Button>
                    </form>
                </div>
                <section className='browse-search-results'>
                        <div className='browse-item-cards'>
                            <p>No Furniture to Display. Try typing in the search bar or adding filters to get results!</p>
                        </div>
                </section>
            </div>
                
        </div>
    )
}