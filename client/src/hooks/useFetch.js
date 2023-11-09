import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        }
        fetchData();
    }, []);

    const reFetch = async() => {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }

    return {data, reFetch};
}

export default useFetch;