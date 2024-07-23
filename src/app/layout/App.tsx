import HomePage from '../../features/home/HomePage'
import ModalManager from '../common/modals/ModalManager'
import NavBar from './nav/NavBar'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <ModalManager />
          <NavBar />
          <Outlet />
        </>
      )}
    </>
  )
}

export default App
