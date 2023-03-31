import { useEffect, useState } from "react";
import axios from 'axios';

const Categories = ({ handleSelectedCategory, isMenuOpen, toggleMenu }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                setCategories(res.data);
            })
    }, [])

    const handleClick = category => { 
        handleSelectedCategory(category)
        
    }


    return (
        <>
            <div className={`categories`}>
                {
                    categories.map((category, index) => (
                        <p key={index} className='category' onClick={() => handleClick(category)}>{category}</p>
                    ))
                }
            </div>

            <div className={`${isMenuOpen ? 'categories-open' : 'categories-close'}`}>
                {
                    categories.map((category, index) => (
                        <p key={index} className='category' onClick={() => handleClick(category)}>{category}</p>
                    ))
                }
            </div>
        </>
    )
}

export default Categories