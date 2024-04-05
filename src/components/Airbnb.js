import { useState } from "react"
import ReactDatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

const Airbnb = ({ datas,setDatas }) => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const handleStartDateChange = (date) => {
      setStartDate(date)
    }
  
    const handleEndDateChange = (date) => {
      setEndDate(date)
    }



    const transformedData = datas.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price, 
      image: item.image,
      description: item.description,
      title: item.title
    }))

    
    
    const handleFormChange = (e) =>{
      e.preventDefault()
      if(startDate && endDate){
       
        const filteredData = transformedData.filter(item => item.price >= 50 )
        // Sıralama işlemi
        const sortedData = filteredData.sort((a, b) => a.price - b.price)
        // İşlenen verileri kullanın
        setDatas(sortedData)
      }
      else{
        alert("Lütfen başlangıç ve bitiş tarihini seçiniz.")
      }

    }

    return (
   <div className="date">
   <form onSubmit={handleFormChange}>
   <div >
        <ReactDatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Başlangıç Tarihi"
        />
          </div>
       <div>
         <ReactDatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Bitiş Tarihi"
        />
       <button className="date-btn">Search</button>
       </div>
   </form>
   </div>
    )
}
export default Airbnb


// ARALIKLI TARİH SEÇİMİ //
// "use client"
// import { useState } from "react"
// import { DatePicker, InputGroup } from 'rsuite';
// const App = () => {

    
//     return (
//         <InputGroup style={{ width: 428 }}>
//         <DatePicker format="yyyy-MM-dd " block appearance="subtle" style={{ width: 230 }} />
//         <InputGroup.Addon>to</InputGroup.Addon>
//         <DatePicker format="yyyy-MM-dd " block appearance="subtle" style={{ width: 230,  }} />
//       </InputGroup>
//     )
// }
// export default App






// ARALIKLI TARİH SEÇİMİ //
// "use client"
// import { useState } from "react"
// import 'react-day-picker/dist/style.css';
// import { format } from 'date-fns';
// import ReactDatePicker from "react-datepicker";

// const App = () => {
//     const [startDate, setStartDate] = useState(new Date())
//     const [endDate, setEndDate] = useState(null)
//     const onChange = (dates) => {
//       const [start, end] = dates
//       setStartDate(start)
//       setEndDate(end)
//     }
//     return (
//       <ReactDatePicker
//         selected={startDate}
//         onChange={onChange}
//         startDate={startDate}
//         endDate={endDate}
//         selectsRange
//         inline
//       />
//     )
// }
// export default App






// ARALIKLI TARİH SEÇİMİ //
//"use client"
// import { useState } from "react"
// import 'react-day-picker/dist/style.css';
// import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
// import {
//   DateRange,
//   DayPicker,
//   SelectRangeEventHandler
// } from 'react-day-picker';


// const App = () => {
// // const [dates,setDates] = useState(new Date())
// const [selectedRange, setSelectedRange] = useState(DateRange)
// const [formValue, setFormValue] = useState('')
// const [toValue, setToValue] = useState('')
 
// const handleFormChange = (e) => {
//     setFormValue(e.target.value)
//     const date = parse(e.target.value, 'y-MM-dd', new Date());
//     if (!isValid(date)) {
//       return setSelectedRange({ from: undefined, to: undefined });
//     }
//     if (selectedRange?.to && isAfter(date, selectedRange.to)) {
//       setSelectedRange({ from: selectedRange.to, to: date });
//     } else {
//       setSelectedRange({ from: date, to: selectedRange?.to });
//     }
// }

// const handleToChange = (e) => {
//     setToValue(e.target.value);
//     const date = parse(e.target.value, 'y-MM-dd', new Date());

//     if (!isValid(date)) {
//       return setSelectedRange({ from: selectedRange?.from, to: undefined });
//     }
//     if (selectedRange?.from && isBefore(date, selectedRange.from)) {
//       setSelectedRange({ from: date, to: selectedRange.from });
//     } else {
//       setSelectedRange({ from: selectedRange?.from, to: date });
//     }
//   }

//   const handleRangeSelect = (range = DateRange | undefined) => {
//     setSelectedRange(range);
//     if (range?.from) {
//       setFormValue(format(range.from, 'y-MM-dd'));
//     } else {
//       setFormValue('');
//     }
//     if (range?.to) {
//       setToValue(format(range.to, 'y-MM-dd'));
//     } else {
//       setToValue('');
//     }
//   }


//   return (
//     <div>
//          <DayPicker
//       mode="range"
//       selected={selectedRange}
//       onSelect={handleRangeSelect}
//       footer={
//         <form className="ma2">
//           <input
//             size={10}
//             placeholder="From Date"
//             value={formValue}
//             onChange={handleFormChange}
//           />
//           {' - '}
//           <input
//             size={10}
//             placeholder="To Date"
//             value={toValue}
//             onChange={handleToChange}
//           />
//         </form>
//       }
//       />
//    </div>

//   )
// }
// export default App

