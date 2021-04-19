import React from 'react';
import Data from './data.json';
import './style.css';

export default function Search() {
    const mystyle = {
        padding: "10px",
        fontFamily: "Arial",
        screenTop:"10px",
       TextDecoder:"10px",
        height:"10px",
       
      };
    return (
        <>
        <div className="searchbar" >
            <input style={mystyle} className='search' type="text" placeholder="Search..." />
            <button className="inputbtn" type='submit'>search</button>
            {
              Data.map((val)=>{
                  return <div className='booktitle'>
                     
                      </div>
              })  
            }
        </div>
        </>
    )
}
