import React from 'react'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { BsBookmarks} from "react-icons/bs";
// import {useHistory} from 'react-router'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
const Header = () => {

    const [isClicked, setClick] = useState(false)
    const [mode, setMode] = useState('light-theme')

    useEffect(() => {
        document.body.className = mode
      }, [mode])

    const modeHandler = () => {
        setClick(!isClicked)
        if (mode === 'dark-theme') {
          setMode('light-theme')
        } else {
          setMode('dark-theme')
        }
    
    
      }
      // const navigate = useNavigate()

  return (
   <div>
    <div className='header' 
    // onClick={()=> navigate('/')}
    >
       {/* <nav > */}
        <div className='logo'>

    <AiFillCopyrightCircle />
    <p>Own Crypto</p>
        </div>
        <BsBookmarks
          className='nav book'
          />
        <button onClick={modeHandler}
          className='nav mode'
          >{isClicked ? 'Light Mode' : 'Dark Mode'}</button>
        <button className='nav sign'>Sign In</button>
      {/* </nav> */}
          </div>
   </div>
  )
}

export default Header
