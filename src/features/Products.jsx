import React from 'react';
import '../styles/productstyle.css'
import { useGetAllProductsQuery } from '../services/products';

const Products=()=>{
    var {isLoading,data}=useGetAllProductsQuery()
    console.log(data)
    return(
        <div className="bor">
            <h2>Products</h2>
            <div className='itemsholder'>
            {
                isLoading&&<img className='loading' src='https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif' alt='loadinggif'/>
            }
            {
                data&&data.map((product)=>{
                    return <li className='items'>
                                <img src={product.image} alt='productimages' width='100px'/>
                                <h4>{product.title.slice(0,50)}</h4>
                           </li>
                })
            }
            </div>
        </div>
    )
}

export default Products