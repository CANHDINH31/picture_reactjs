import { useState, useEffect } from "react";

import Api from '../hooks/Api'



export const FetchCategory = () => {
    const [state, setState] = useState({})
    const [error, setError] = useState(false);

    const fetchCategory = async (category) => {
        try {
            setError(false);
            const result = await Api.fetchCategory(category)
            setState({ ...result[0] })


        } catch (error) {
            setError(true);
        }
    }

    useEffect(() => {
        fetchCategory("tranhphongcanh");
    }, [])


    return { state, error }
}


