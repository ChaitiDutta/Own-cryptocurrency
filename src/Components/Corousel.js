import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
// import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
import Slider from 'react-slick'
function Corousel() {

    const[coin, setCoin]=useState([])
    const[error, setError]=useState(false)
    const[imgIdx, setImgIdx]=useState(0)

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res=>{
            setCoin(res.data)
            setError(false)
        })
        .catch(err=>{
            setCoin('')
            setError('Something Went Wron!')
        })
    },[])


    const settings ={
        isFinite:true,
        lazyload:true,
        speed:300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPdding:0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        beforeChange:(curent, next)=> setImgIdx(next),
    }

  

  return (
    <div >
        <div className='card'>

      {/* {TotalCoins} */}
      <Slider {...settings}>
        {coin.map((info,idx)=>{
            return(
                <div key={info.id}
                className={idx===imgIdx? 'slide activeSlide':'slide'}
                >
               <img src={info.image} alt={info.image} /> 
               <div className='card-div'>
                <div>
                {info.symbol}
                </div>
                <div>
                {info.current_price}
                </div>
               </div>
            </div>
        )
    })}
      </Slider>
    </div>
      <div className='about-div'>
        <div className='about'>
          
            <h1>Know More</h1>
          
            <div className='abtp'>
        <p>In cryptocurrency, trading is done by buying and selling 
            of digital currencies like Bitcoin, Ethereum with INR, 
            dollars, pound etc. A crypto asset is firstly bought 
            with local currency and crypto investors directly start
             exploring and trading for earning profits.
             The use of encryption technologies means that 
             cryptocurrencies function both as a currency 
             and as a virtual accounting system. To use 
             cryptocurrencies, you need a cryptocurrency 
             wallet.</p>
            </div>
        
        </div>
        <div className='about-img' >
        <div className='about-im'>
            <img className='abt-img ' src='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img'/>
            <img className='abt-b-img' src='https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='img'/>
        </div>
        <div className='img-div'>
            <img className='abt-img' src='https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>
            <img className='abt-b-img' src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='img'/>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Corousel
