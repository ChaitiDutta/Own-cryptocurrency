// import axios from 'axios';
// import React, { useEffect, useState, useRef} from 'react'
// import { Line } from 'react-chartjs-2';
// import { ChartHistry } from '../config/api';

// const CoinInfo = ({coin}) => {

// const [data, setData]= useState();
// const [days, setDaysz]= useState(1);
// // const [data, setData]= useState();

// const lineRef = useRef(null);

// const fetchChartHistry = async ()=>{
//   const {data}= await axios.get(ChartHistry(coin.id, days))
// setData(data.prices)
// }

// useEffect(()=>{
//   fetchChartHistry();
 
// },[days])

// if (!coin) {
//   return <div>Coin object is not passed correctly</div>;
// }

// const { id } = coin;
// if (!id) {
//   return <div>Coin object does not have 'id' property</div>;
// }

//   return (
//     <div className='chart-box'>
//       {!data?(<div>No Data Found</div>)
//       :(<>
//       <Line 
//       ref={lineRef}
//       id={lineRef.current}
//         data ={{
//           labels: data.map(coin=>{
//             let date = new Date(coin[0]);
//             let time = 
//               date.getHours() > 12 ?
//               `${date.getHours()-12}:${date.getMinutes()} PM`
//               : `${date.getHours()}:${date.getMinutes()} AM`

//               return days===1? time : date.toLocaleDateString();
//           }),

//           datasets: [
//             {data: data.map((coin)=> coin[1]),
//             label: `Price ( Past ${days} Days) in USD`,
//           }

//           ]
//         }}

//         options={{
//           elements:{
//             point:{
//               radius: 1,
//             }
//           }
//         }}
//       />
//       </>)}
//     </div>
//   )
// }

// export default CoinInfo
