import EventList from './EventList'
import { useEventStore } from '../../../app/store/event'


export default function EventDashboard() {

  const { events } = useEventStore((state) => state)

  return (
    <>
      <section>
        <EventList events={events} />
      </section>
      {/* <section className='lg:w-4/12'>
        <h2>Filters</h2>
      </section> */}
    </>
  )
}
