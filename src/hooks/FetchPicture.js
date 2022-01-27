import { useState, useEffect } from "react";

import Api from '../hooks/Api'

const initialState = {
    page: 0,
    data: [{
        
    }]
}

export const FetchData = () => {
    const [state, setState] = useState(initialState)
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoadingMore,setIsLoadingMore] = useState(false);

    const fetchPictures = async (page) => {
        try {
            setError(false);
            setLoading(true);
            const pictures = await Api.fetchPictures(page)
            setState(prev => ({
                page,
                data:
                    page > 1 ? [...prev.data, ...pictures] : [...pictures]
            }))


        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchPictures(1);
    }, [])

    useEffect(()=>{
        if(!isLoadingMore) return;

        fetchPictures(state.page+1);

        setIsLoadingMore(false);
    },[isLoadingMore])

    return { state, loading, error,setIsLoadingMore }
}


