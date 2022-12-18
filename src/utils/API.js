// in dev mode
const URL_PREFIX = "http://localhost:3001"
// in prod mode
// const URL_PREFIX= "https://codescaper.herokuapp.com"

const API = {
    getAllFurniture: () => {
        return (
            fetch(`${URL_PREFIX}/api/furniture`),{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
        },
    
    // getAllClothing
    // getAllCrafting
    
    // getOneFurniture?
    // getOneClothing?
    // getOneCrafting? 
    }
