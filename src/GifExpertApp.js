import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //const categorias = ['One Punche' ,'Samurai X','Dragon Ball'];
    const [categories , setCategories] = useState(['Boca Juniors']);

    /*const handleAdd = () => {
        setCategories(categories.concat('HunterXHunter'));
    }*/

    return (
        <Fragment>
            <h2>Gif Expert App</h2>
            <AddCategory  setCategories = {setCategories}/>   
            <hr />
            <ol>
                {
                    categories.map( category => 
                        <GifGrid
                            key= {category} 
                            category = { category } 
                        />
                    )}
            </ol>
        </Fragment>
    )
}
