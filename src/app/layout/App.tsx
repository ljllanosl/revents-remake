import { useState } from 'react'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import NavBar from './nav/NavBar'

function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
    </>
  )
}

export default App
