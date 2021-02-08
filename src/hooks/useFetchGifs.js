import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
   
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    
    
    // Este use effect se fija que si cambio la category vuelva a ejecutar este codigo 
    useEffect( () => {

        getGifs ( category )
            .then( imgs => {
                setstate({
                    data:imgs,
                    loading:false
                });
            })

    },[category])  

    return state;// retorna objeto{data:[] , loading:true}

}
