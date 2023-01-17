import React from 'react'
import { BsBookmarks, BsStar } from "react-icons/bs";
// import { RiArrowDropDownLine } from 'react-icons/ri'
import { useState, useEffect } from 'react';
import Corousel from './Corousel';
import axios from 'axios';
import Pagination from './Pagination';

function Track() {

  const [isClicked, setClick] = useState(false)
  const [mode, setMode] = useState('light-theme')
  const [search, setSearch] = useState('')
  const [coin, setCoin] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [coinPerPage] = useState(10)
  const [active, setActive] = useState(false)
  const [currency, setCurrency] = useState("USD")
  const [cart, setCart] = useState([])


  useEffect(() => {
    document.body.className = mode
  }, [mode])


  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
        setCoin(res.data)

      })
      .catch(err => {
        setCoin('')

      })
  }, [currency])

  const indexOfTheLastCoin = currentPage * coinPerPage
  const indexOfTheFirstCoin = indexOfTheLastCoin - coinPerPage
  const ListedCity = coin.slice(indexOfTheFirstCoin, indexOfTheLastCoin)

  const searchCoin = coin.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  )

  const paginate = (pageno) => {
    setCurrentPage(pageno)
    setActive(!active)
  }

  const modeHandler = () => {
    setClick(!isClicked)
    if (mode === 'dark-theme') {
      setMode('light-theme')
    } else {
      setMode('dark-theme')
    }
  }
 const addToFav =()=>{
  setClick(!isClicked)
  setCart([...cart])
  console.log('added')
 }

//  const FavList = 


  return (
    <div>
      <nav >
        <BsBookmarks
          className='nav book'
        />
        <button onClick={modeHandler}
          className='nav mode'
        >{isClicked ? 'Light Mode' : 'Dark Mode'}</button>
        <button className='nav sign'>Sign In</button>
      </nav>
      <div className='home'>
        <p className='p1'>Trade with</p>
        <p className='p2'>cryptocurrency</p>
        {/* <img src='https://www.nicepng.com/png/detail/396-3962017_suprised-man-png-surprised-man-face-png.png'/> */}
      </div>
      <div>
        <Corousel />
      </div>

      <div className='input-table'>
        <div className='text'>
          <p className='text-head'>Buy crypto at true cost</p>
          <h3>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank
            transfers or your credit/debit card.</h3>
        </div>
        <div className='post-table'>
          <div className="dropdown">
            <select className='currency'
            onChange={(e) => {
              const SelectedCurrency = e.target.value
              setCurrency(SelectedCurrency)
            }}>
              <option value="USD" style={{ cursor: 'pointer' }}
              className='option'
              >USD</option>
              <option value="INR"  className='option'
              >INR</option>
            </select>

          </div>
          <input
            type='search'
            className='search'
            placeholder='search...'
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className='coin-table'>

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Current Price</th>
                  <th>24h</th>
                  <th>Market Cap</th>

                </tr>
              </thead>

              <tbody>
                {search ? searchCoin.map((data) => {
                  return (

                    <tr key={data.id}>
                      <td style={{cursor:'pointer'}}
                      // className={isClicked?'star':'nonstar'}
                      ><BsStar onClick={addToFav}
                                            /></td>
                      <td className='td'>
                        <div className='td-2'>
                      <div>  <img src={data.image} alt={data.image} /></div>
                          <div className='name'>{data.name}</div>
                        </div>
                          <div className='sym'>{data.symbol}</div>
                      </td>
                      <td>{data.current_price.toLocaleString()}</td>
                      <td>{data.price_change_percentage_24h.toFixed(2)}</td>
                      <td>{data.market_cap.toLocaleString()}</td>
                    </tr>

                  )
                }) : ListedCity.map((data) => {
                  return (

                    <tr key={data.id}>
                      <td style={{cursor:'pointer'}}
                      // className={isClicked?'star':'nonstar'}
                      >
                        <BsStar onClick={addToFav} 
                     /></td>
                      <td className='td'>
                        <div className='td-2'>
                       <div><img src={data.image} alt={data.image} /></div> 
                          <div className='name'>{data.name}</div>
                        </div>
                          <div className='sym'>{data.symbol}</div>
                      </td>
                      <td>{data.current_price.toLocaleString()}</td>
                      <td>{data.price_change_percentage_24h.toFixed(2)}</td>
                      <td>{data.market_cap.toLocaleString()}</td>
                    </tr>

                  )
                })}
              </tbody>

            </table>

          </div>
          <Pagination totalCoin={coin.length}
            coinPerPage={coinPerPage}
            paginate={paginate}
            active={active} />
        </div>
      </div>

    </div>
  )
}

export default Track
