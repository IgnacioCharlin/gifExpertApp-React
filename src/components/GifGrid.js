import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
   // Aca se guarda en la variable la data (las imagenes) y el estado de la carga
    const { data:images,loading } = useFetchGifs( category );

    return (
        /* Esta parte del codigo se encarga de tomar las imagenes y colocarlo en el html*/
        <>
        <h3 className="h3-category">{category}</h3>

        { loading && <p className="animate__animated animate__flash"> loading </p> }
        
        <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem  
                            key={ img.id }
                            { ...img }
                        />
                        
                    ))
                }
        </div>
        </>
    )
}
