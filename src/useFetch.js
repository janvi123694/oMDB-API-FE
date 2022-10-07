import React, { useState, useContext, useEffect } from "react";
export const API_ENDPOINT =
 `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const [error, setError] = useState({ show: false, msg: "" }); 

    const fetchMovies = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            if (data.Response === "True") {
                setData(data.Search || data);
                setError({ show: false, msg: "" });
            }
            else {
                setError({ show: true, msg: data.Error });
            }

            setLoading(false);
        } 
        catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);

    return {
        loading, 
        error, 
        data
    }
}

export default useFetch