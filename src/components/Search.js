import React from 'react';
import Data from './data.json';
import './style.css';

export default function Search() {
    const mystyle = {

        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <>
        <div className="searchbar" >
            <input style={mystyle} className='search' type="text" placeholder="Search..." />
            <button style={mystyle} className="inputbtn" type='submit'>search</button>
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
