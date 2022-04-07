import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingItem from './pages/BookingItem';

function App() {
  return (
    <div className='App' >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/bookingItems/:id' element={<BookingItem/>}/> 
      </Routes>     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
