
import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin , AiFillCopyrightCircle  } from 'react-icons/ai';

function Footer() {
  return (
    <div className='Foot'>
       <div className='F-head'>
             <img src='https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J5cHRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='covid' />
             <div>
                 <p>Own</p>
                 <p>Crypto</p>
 
               </div>
           </div>
           <div className='last-col'>
               <p className='F-head2'>Contact Us At:</p>
             <div className='icons'>
                    <AiFillFacebook />
                   <AiFillTwitterSquare />
                   <AiFillLinkedin />
               </div>
               <div className='F-end'>
                   <AiFillCopyrightCircle />
                   <span>All rights reserved || 2023</span>
                 {/* <p>All rights reserved || 2023</p> */}
              </div>
          </div>
    </div>
  )
}

export default Footer
