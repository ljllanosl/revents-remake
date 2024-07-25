import EventList from './EventList'
import { useEventStore } from '../../../app/store/event'


export default function EventDashboard() {

  const { events } = useEventStore((state) => state)

  return (
    <main className='flex md:flex-row flex-col gap-5 mt-28 container mx-auto max-w-6xl'>
      <section className='md:w-8/12 w-full'>
        <EventList events={events} />
      </section>
      <section className='md:w-4/12'>
        {/* <h2>Filters</h2> */}
      </section>
    </main>
  )
}
