import React from 'react'
import { useGetAllCountriesQuery } from '../services/countries'

const Countries = () => {
    var {isLoading,data}=useGetAllCountriesQuery()
    console.log(data);
  return (
    <div className='bor'>
        <h2>Countries</h2>
       <ul>
         {
            isLoading&&<img src='https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif' alt='loading'/>
         }
        {
            data&&data.map((country)=>{
                return <li>{country.name.common}</li>
            })
        }
       </ul>
    </div>
  )
}

export default Countries