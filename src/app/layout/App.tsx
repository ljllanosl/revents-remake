import HomePage from '../../features/home/HomePage'
import NavBar from './nav/NavBar'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </>
  )
}

export default App
