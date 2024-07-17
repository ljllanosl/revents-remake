import HomePage from '../../features/home/HomePage'
import NavBar from './nav/NavBar'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <div className=''>
      <NavBar />
      {location.pathname === '/' ? <HomePage /> : <Outlet />}
      {/* <EventDashboard
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        selectedEvent={selectedEvent}
        selectEvent={handleSelectEvent}
      /> */}
    </div>
  )
}

export default App
