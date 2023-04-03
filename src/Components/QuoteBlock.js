import React, { useEffect, useState } from 'react'
import "../App.css"
import LoadingSpinner from './LoadingSpinner';

const QuoteBlock = () => {

     const [data,setData] = useState([]);

     const apiGet = () =>{
          setIsLoading(true);
          fetch("https://type.fit/api/quotes")
          .then((res)=>res.json())
          .then((json)=>setData(json))
          setIsLoading(false)
     }

     useEffect(()=>{
          apiGet();
     },[])
     
     const [quote,setQuote] = useState(data[0])

     const [color,setColor] = useState("whitesmoke")

     const handleClick=()=>{
          
          let x=Math.floor(Math.random()*256)
          let y=Math.floor(Math.random()*256)
          let z=Math.floor(Math.random()*256)
          let bColor = "rgb("+x+","+y+","+z+")"
          setColor(bColor)
          const randomNum = Math.floor(Math.random()*data.length)
          setQuote(data[randomNum])
          
     }

     const [isLoading, setIsLoading] = useState(false);

     const renderUser = (
          <>
               <div onClick={handleClick} className='btn'>New Quote</div>
                <p>"{quote?.text}"</p>
                <div className='author'>-{quote?.author}</div>
          </>
     )
  return (
    <>
    <div className='background' style={{backgroundColor:color}}>
          <div className='block'>
          {isLoading ? <LoadingSpinner /> : renderUser}
          </div>
    </div>
    
    </>
  )
}

export default QuoteBlock
