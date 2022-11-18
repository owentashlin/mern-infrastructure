import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  // I'm intentionally leaving this empty (null)
  const [user, setUser] = useState(null)
  //const [user, setUser] = useState('Owen')

  console.log(user)
  return (
    <div className='App'>
      {user ? (
        <>
          <NavBar />
          <Routes>
            {/* if the url matches the path given for a specific Route, render the element at that Route */}
            <Route
              path='/owen'
              element={
                <div>
                  <h2>Owen was here</h2>
                  <button>Click me!</button>
                </div>
              }
            />
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  )
}

export default App;