import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { UserAuth } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51MjBxUAzkK0R1zS2a20iWhlD6spemYxVjuu1p0ngeUFowsDMTqTjjqUSYnyuxLklLMGj13sFoY6IVRwrVZCbp5ay00nQ6XS0IL");


function App() {
  const { dispatch } = UserAuth()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else{
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  return (

 
      <Router>
    <div className='App'>
          <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/payment' element={ 
         <>
        <Elements stripe={promise}>
         <Payment/>
        </Elements>
         </>
      } 
        />
      </Routes>
    </div>
      </Router>
  );
}

export default App;


{/* <Router>
<div className="app">
  <Switch>
    <Route path="/orders">
      <Header />
      <Orders />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/checkout">
      <Header />
      <Checkout />
    </Route>
    <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </Route>
    <Route path="/">
      <Header />
      <Home />
    </Route>
  </Switch>
</div>
</Router> */}