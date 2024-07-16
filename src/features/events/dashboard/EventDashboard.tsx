import { useEffect, useState } from 'react'
import { sampleData } from '../../../app/api/sampleData'
import EventForm from '../form/EventForm'
import EventList from './EventList'
import { AppEvent } from '../../../types'

interface Props {
  formOpen: boolean;
  setFormOpen: (formOpen: boolean) => void;
  selectedEvent: AppEvent | null;
  selectEvent: (event: AppEvent) => void;
}

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }: Props) {

  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData)
  }, [])

  function addEvent(event: AppEvent) {
    setEvents(prevState => {
      return [...prevState, event]
    })
  }


  return (
    <main className='flex flex-row gap-5 mt-28 container max-w-7xl mx-auto'>
      <section className='w-8/12'>
        <EventList
          events={events}
          selectEvent={selectEvent}
        />
      </section>
      <section className='w-4/12'>
        {formOpen &&
          <EventForm
            setFormOpen={setFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : 'create'}
          />}
      </section>
    </main>
  )
}
