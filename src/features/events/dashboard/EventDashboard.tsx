import EventList from './EventList'
import { useEventStore } from '../../../app/store/event'


export default function EventDashboard() {

  const { events } = useEventStore((state) => state)

  return (
    <main className='flex flex-row gap-5 mt-28 container mx-auto max-w-6xl'>
      <section className='w-8/12'>
        <EventList events={events} />
      </section>
      <section className='w-4/12'>
        <h2>Filters</h2>
      </section>
    </main>
  )
}
