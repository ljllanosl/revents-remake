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
          <main className='mt-28 mb-4 px-4 md:px-0 mx-auto max-w-screen-md'>
            <Outlet />
          </main>

        </>
      )}
    </>
  )
}

export default App
