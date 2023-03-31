import axios from "axios";
import { useEffect, useState } from "react"
import Productcontainer from "./Productcontainer";

const Display = ({category}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let apiUrl = 'https://fakestoreapi.com/products/';
        if (category !== '') {
            apiUrl += `category/${category}`;
        }
        axios.get(apiUrl)
        .then(res => setData(res.data))
    },[category])
    
    return(
        data.map(d => (
            <Productcontainer key = {d.id} data = {d}/>
        ))
    )
}

export default Display