import { useState } from 'react'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import NavBar from './nav/NavBar'
import { AppEvent } from '../../types'

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null)


  function handleSelectEvent(event: AppEvent) {
    setSelectedEvent(event)
    setFormOpen(true)
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null)
    setFormOpen(true)
  }

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <EventDashboard
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        selectedEvent={selectedEvent}
        selectEvent={handleSelectEvent}
      />
    </>
  )
}

export default App
