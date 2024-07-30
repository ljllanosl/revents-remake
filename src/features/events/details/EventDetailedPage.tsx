import { useParams } from 'react-router-dom'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
// import EventDetailedSidebar from './EventDetailedSidebar'
import { useEventStore } from '../../../app/store/event'

export default function EventDetailedPage() {
  const { id } = useParams()
  const event = useEventStore((state) => state.events.find((e) => e.id === id))

  if (!event) return <h1 className='font-medium text-3xl'>Event not found</h1>

  return (
    <>
      <section className='flex flex-col gap-5'>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        {/* <EventDetailedChat /> */}
      </section>
      {/* <section className='w-4/12'>
        <EventDetailedSidebar />
      </section> */}
    </>
  )
}