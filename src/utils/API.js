// in dev mode
const URL_PREFIX = "http://localhost:3001"
// in prod mode
// const URL_PREFIX= "https://codescaper.herokuapp.com"

const newItems = "added=1.2"

const API = {
    getAllNewFurniture: () => {
        return (
            fetch(`${URL_PREFIX}/api/furniture/?${newItems}`)
            .then((res)=>{
                const data = res.json()
                console.log(data)
                return data
            })
        )
    },
    
    // getAllClothing
    // getAllCrafting
    
    // getOneFurniture?
    // getOneClothing?
    // getOneCrafting? 
}

export default API