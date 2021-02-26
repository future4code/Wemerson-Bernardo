import {useEffect, useState} from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
            Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert('Algo de errado não está certo!')
        })
    }, [url])

    return(data)
}

export default useRequestData