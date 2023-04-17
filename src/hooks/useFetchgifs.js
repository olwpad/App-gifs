import React from 'react'
import { useState } from 'react';

import { useEffect } from 'react';
import { getGifs } from '../componentes/helpers/getGits';

export const useFetchgifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}



