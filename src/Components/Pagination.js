// import React, { useState } from 'react'
// import {RiArrowDropDownLine} from 'react-icons/ri'

function Pagination({totalCoin, coinPerPage, paginate,active}) {


  // const [active, setActive]=useState(false)
  const pages = [];

for(let i=1; i<=Math.ceil(totalCoin/coinPerPage);i++){
  pages.push(i)
}

  return (
    <div>
      <ul className='page'>
        {pages.map((no)=>(
          <li key={no} className='page-item'>
              <a href='#!'
      onClick={()=>paginate(no)}
      
      >
      <div className={!active? 'active':'unactive'}>
      {no}
        </div>   
      </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
