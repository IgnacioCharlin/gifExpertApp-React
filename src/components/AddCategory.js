import React, { useState } from 'react'
import propTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length >2){
            setCategories(cate => [ inputValue , ...cate]);
            setinputValue('');
        }    
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={ handleInputChange }
            /> 
        </form>          
    )
}

AddCategory.propTypes = {
    setCategories : propTypes.func.isRequired
}
