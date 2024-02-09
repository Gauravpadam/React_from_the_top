import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/authService';
import { useState, useEffect } from "react"
import { login, logout } from './store/authSlice';
import Container from './components/Container';
import { Header } from './components/Header';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }})
    .finally(() => {
      setLoading(false)
    }) 
  }, [])

  return !loading ? (
  <div className='min-h-screen flex bg-gray-400'>
    <Container children={Header} />

  </div>) : (<div>Please wait</div>)
}

export default App
