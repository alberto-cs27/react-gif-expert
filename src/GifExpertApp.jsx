import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])

    const handleAddCategory  = ( newCategory ) => {

        if( categories.includes(newCategory) ) return

        setCategories(
            [
                newCategory,
                ...categories,                
            ]

        )
    }

    return (
        <>
            <h1>GIF Expert App</h1>

            <AddCategory 
                onNewCategory={handleAddCategory}
            />
            
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key= { category }    
                        category = { category }                    
                    />
                )) 
            }
        </>
    )
}

export {
    GifExpertApp
}
