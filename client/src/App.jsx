import './App.css'
import { useAuthContext } from './hooks/useAuthContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Navbar } from './components/Navbar'

function App() {

  const { user } = useAuthContext()

  return (
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
          <Toaster position='top-center' toastOptions={{duration: 2000}}/>
          <Routes>
            <Route
              path='/'
              element={ user ? <Home/> : <Navigate to={'/signup'}/>}
            />
            <Route
              path='/login'
              element={ !user ? <Login/> : <Navigate to={'/'}/>}
            />
            <Route
              path='/signup'
              element={ !user ? <Signup/> : <Navigate to={'/'}/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
