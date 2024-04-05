 import { useState } from "react"

 const Apartments = ({ datas }) => {
     const [open, setOpen] = useState(null)

    
     const handleViewClick = (id) => {
       setOpen((pre) => pre === id ? null : id)
     }
 
   return (
     <div>
         {datas.map((data) => (
     <div className="apartments" key={data.id}>
         <div className="apartments-container">
             <img src={data.image} alt={data.title} style={{ maxWidth: "300px" }} />
             <div className="details">
                 <h4>{data.title}</h4>
       <div className="vievDetails">  
    {open === data.id  && (
      <div> 
        <p> {data.description}</p>
         <p>${data.price} / Night</p> 
         </div>
      )}
    <button className="apartments-btn" onClick={() => handleViewClick(data.id)}>View Details</button>
      </div>
             </div>
         </div>
     </div>
 ))}
     </div>
   )
 }
 export default Apartments



/////////////////////////////////////////////////////////////////////////////


// import { useState } from "react";
// import ViewDetails from "./ViewDetails";


// const Apartments = ({ datas,setDatas }) => {
//     const [open, setOpen] = useState(false)
//     const [search,setSearch] = useState(50)
//     // const [search2,setSearch2] = useState("")

//     const handleViewClick = (id) => {
//       setOpen((pre) => pre === id ? !pre : id)
//     }

//     const transformedData = datas.map(item => ({
//       id: item.id,
//       name: item.name,
//       price: item.price, 
//       image: item.image,
//       description: item.description,
//       title: item.title
//     }))

//     const handleSearchClick = (e) => {
//       e.preventDefault()
//       const filteredData = transformedData.filter(item => item.price >= search )
//       // Sıralama işlemi
//       const sortedData = filteredData.sort((a, b) => a.price - b.price)
//       // İşlenen verileri kullanın
//       setDatas(sortedData)
// }

//   return (
//     <div>
//      <form onSubmit={handleSearchClick}>
//      <input 
//        className="search-input"
//        type="number"
//        placeholder="Search"
//        value={search}
//        onChange={(e) => setSearch(e.target.value)}
//      />
       
//      <button>Search</button>
//      </form>
//         {datas.map((data) => (
//     <div className="apartments" key={data.id}>
//         <div className="apartments-container">
//             <img src={data.image} alt={data.title} style={{ maxWidth: "300px" }} />
//             <div className="details">
//                 <h4>{data.title}</h4>
//                 <p>{data.description}</p>
//                 <p>${data.price} / Night</p>
//            <ViewDetails handleViewClick={handleViewClick} open={open} data={data} />
//             </div>
//         </div>
//     </div>
// ))}
//     </div>
//   )
// }
// export default Apartments

{/* <input 
className="search-input"
type="text"
placeholder="Search"
value={search2}
onChange={(e) => setSearch2(e.target.value)}
/> */}