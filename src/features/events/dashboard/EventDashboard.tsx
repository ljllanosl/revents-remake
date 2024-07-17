import { useEffect, useState } from 'react'
import { sampleData } from '../../../app/api/sampleData'
import EventList from './EventList'
import { AppEvent } from '../../../types'


export default function EventDashboard() {

  const [events, setEvents] = useState<AppEvent[]>([])

  useEffect(() => {
    setEvents(sampleData)
  }, [])

  return (
    <main className='flex flex-row gap-5 mt-28 container mx-auto max-w-6xl'>
      <section className='w-8/12'>
        <EventList events={events}/>
      </section>
      <section className='w-4/12'>
        <h2>Filters</h2>
      </section>
    </main>
  )
}
