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
                                <FormControlLabel control={<Checkbox/>} label="Mickey & Friends" />
                                <FormControlLabel control={<Checkbox/>} label="The Sword in the Stone" />
                                <FormControlLabel control={<Checkbox/>} label="WALL-E" />
                                <FormControlLabel control={<Checkbox/>} label="Moana" />
                                <FormControlLabel control={<Checkbox/>} label="Ratatouille" />
                                <FormControlLabel control={<Checkbox/>} label="Beauty and the Beast" />
                                <FormControlLabel control={<Checkbox/>} label="Wreck-It Raplph" />
                                <FormControlLabel control={<Checkbox/>} label="Cinderella" />
                                <FormControlLabel control={<Checkbox/>} label="The Lion King" />
                                <FormControlLabel control={<Checkbox/>} label="The Little Mermaid" />
                                <FormControlLabel control={<Checkbox/>} label="Frozen" />
                                <FormControlLabel control={<Checkbox/>} label="Tangled" />
                                <FormControlLabel control={<Checkbox/>} label="Monsters, Inc." />
                                <FormControlLabel control={<Checkbox/>} label="Toy Story" />
                                <FormControlLabel control={<Checkbox/>} label="Lilo & Stitch" />
                                <FormControlLabel control={<Checkbox/>} label="The Incredibles" />
                                <FormControlLabel control={<Checkbox/>} label="Hercules" />
                                <FormControlLabel control={<Checkbox/>} label="Coco" />
                                <FormControlLabel control={<Checkbox/>} label="Cars" />
                                <FormControlLabel control={<Checkbox/>} label="Lightyear" />
                                <FormControlLabel control={<Checkbox/>} label="Up" />
                                <FormControlLabel control={<Checkbox/>} label="Sleeping Beauty" />
                                <FormControlLabel control={<Checkbox/>} label="Snow White" />
                                <FormControlLabel control={<Checkbox/>} label="General" />
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
                                <FormControlLabel control={<Checkbox/>} label="Essentials" />
                                <FormControlLabel control={<Checkbox/>} label="Decor" />
                                <FormControlLabel control={<Checkbox/>} label="Trimmings" />
                                <FormControlLabel control={<Checkbox/>} label="Tables" />
                                <FormControlLabel control={<Checkbox/>} label="Beds" />
                                <FormControlLabel control={<Checkbox/>} label="Seating" />
                                <FormControlLabel control={<Checkbox/>} label="Storage" />
                                <FormControlLabel control={<Checkbox/>} label="Appliance" />
                                <FormControlLabel control={<Checkbox/>} label="Electronics" />
                                <FormControlLabel control={<Checkbox/>} label="Utilities" />
                                <FormControlLabel control={<Checkbox/>} label="Art" />
                                <FormControlLabel control={<Checkbox/>} label="Lighting" />
                                <FormControlLabel control={<Checkbox/>} label="Foliage" />
                                <FormControlLabel control={<Checkbox/>} label="Rugs" />
                                <FormControlLabel control={<Checkbox/>} label="Misc." />
                                <FormControlLabel control={<Checkbox/>} label="Wallpaper" />
                                <FormControlLabel control={<Checkbox/>} label="Floors" />
                                <FormControlLabel control={<Checkbox/>} label="Doors" />
                                <FormControlLabel control={<Checkbox/>} label="Windows" />
                                <FormControlLabel control={<Checkbox/>} label="Wall" />
                                <FormControlLabel control={<Checkbox/>} label="Ceiling" />
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
                                <FormControlLabel control={<Checkbox/>} label="Bedroom" />
                                <FormControlLabel control={<Checkbox/>} label="Bathroom" />
                                <FormControlLabel control={<Checkbox/>} label="Living Room" />
                                <FormControlLabel control={<Checkbox/>} label="Dining Room" />
                                <FormControlLabel control={<Checkbox/>} label="Kitchen" />
                                <FormControlLabel control={<Checkbox/>} label="Outdoors" />
                                <FormControlLabel control={<Checkbox/>} label="Rec Room" />
                                <FormControlLabel control={<Checkbox/>} label="Study" />
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
                                <FormControlLabel control={<Checkbox/>} label="Bold" />
                                <FormControlLabel control={<Checkbox/>} label="Casual" />
                                <FormControlLabel control={<Checkbox/>} label="Cute" />
                                <FormControlLabel control={<Checkbox/>} label="Elegant" />
                                <FormControlLabel control={<Checkbox/>} label="Futuristic" />
                                <FormControlLabel control={<Checkbox/>} label="Modern" />
                                <FormControlLabel control={<Checkbox/>} label="Professional" />
                                <FormControlLabel control={<Checkbox/>} label="Quirky" />
                                <FormControlLabel control={<Checkbox/>} label="Rustic" />
                                <FormControlLabel control={<Checkbox/>} label="Sporty" />
                                <FormControlLabel control={<Checkbox/>} label="Traditional" />
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
                                <FormControlLabel control={<Checkbox/>} label="1.0" />
                                <FormControlLabel control={<Checkbox/>} label="1.1" />
                                <FormControlLabel control={<Checkbox/>} label="1.2" />
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
                                <FormControlLabel control={<Checkbox/>} label="Founder's Pack: Standard Edition" />
                                <FormControlLabel control={<Checkbox/>} label="Founder's Pack: Deluxe Edition" />
                                <FormControlLabel control={<Checkbox/>} label="Founder's Pack: Ultimate Edition" />
                                <FormControlLabel control={<Checkbox/>} label="Friendship" />
                                <FormControlLabel control={<Checkbox/>} label="Pixar Star Path" />
                                <FormControlLabel control={<Checkbox/>} label="Villain's Star Path" />
                                <FormControlLabel control={<Checkbox/>} label="Festive Star Path" />
                                <FormControlLabel control={<Checkbox/>} label="Special Tasks" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
            </aside>
            <div className='browse-right-container'>
                <div className='broswe-form-container'>
                    <form className='browse-form'>
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