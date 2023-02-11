
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import { SingleCoin } from "../config/api";
// import CoinInfo from "./CoinInfo";


// const CoinPage = () => {

//   const { id } = useParams();
//   const [coin, setCoin] = useState();
//   const [error, setError] = useState(null);

//   const fetchCoin = async () => {
//     try{const { data } = await axios.get(SingleCoin(id));
//     setCoin(data)}
//     catch (err) {
//       setError(err);
//   }
    
//   };
//   console.log(coin)

//   useEffect(() => {
//     fetchCoin();
//   })

//   if (error) {
//     return <ErrorBoundary error={error} />;
//   }
  
//   return (
//     <div className="container">
//       {coin?(
//       <div className="info" >
//         <div>

//         <img src={coin.image.large} alt={coin.name}/>
//         </div>
//        <div className="sideInfo" >
//         <div className="side">

//         <span style={{fontSize:'22px', fontWeight:'bold'}}>RANK : </span><span style={{fontSize:'18px'}}>&nbsp;{coin.market_cap_rank}</span>
//         </div >
//         <div className="side">
          
//        <span style={{fontSize:'22px', fontWeight:'bold'}}>NAME : </span><span style={{fontSize:'18px'}}> &nbsp;{coin.name}</span> 
//         </div>
//         <div className="side">
          
//         <span style={{fontSize:'22px', fontWeight:'bold'}}>
//         DESCRIPTION : </span><span style={{fontSize:'18px'}}> {coin.description.en.split(". ")[0]}.
//         </span>
//           </div>
//        </div>
//       </div>
//       ) : null}

//       {coin? <CoinInfo coin={coin} /> : null}
//     </div>
//   )
// }

// const ErrorBoundary = ({ error }) => {
//   return <h1>An error occurred: {error.message}</h1>;
// };

// export default CoinPage