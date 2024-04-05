"use client"
import { useState,useEffect } from "react"
import Airbnb from "./Airbnb";
import Apartments from "./Apartments";


const App = () => {
 const [datas,setDatas] = useState([])


 useEffect(() => {
const fetchData = async () => {
    try{
        const response = await fetch(`/apartments.json`)
        const data = await response.json()
       
        setDatas(data)
    }
    catch(err){
        console.error(`Airbnb verileri alınırken bir sorun oluştu ${err.message}`)
    }
 }
 fetchData()
},[])   


    return (
        <div className="container">
            <h1>Project: Airbnb</h1>
            <Airbnb datas={datas} setDatas={setDatas} />
            <Apartments datas={datas} setDatas={setDatas}  />
        </div>
    )
}
export default App

// const filterAirbnb = (criteria) => {
//     return datas.filter((data) => {
//         return data.price >= criteria.minPrice && data.price <= criteria.maxPrice
//     })
// }
// const filterCriteria = {
//     minPrice: 20, // Minimum fiyat
//     maxPrice: 500 // Maksimum fiyat
//   }
//   const filteredAirbnb = filterAirbnb(filterCriteria)

