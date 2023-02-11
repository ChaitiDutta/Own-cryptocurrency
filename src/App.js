// import {  Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import './App.css';
// import CoinPage from './Components/CoinPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Track from './Components/Track';

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Header/>
      <Track />
      {/* <Routes> */}
      {/* <Route path='/' element={<Track /> } exact/> */}
      {/* <CryptoContext> */}

      {/* <Route path='/coins/:id' element={<CoinPage />}/> */}
      {/* </CryptoContext> */}
      {/* </Routes> */}
      <Footer />
    </div>
    // </BrowserRouter>
  );
}

export default App;
