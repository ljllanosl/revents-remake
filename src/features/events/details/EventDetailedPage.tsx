import { useParams } from 'react-router-dom'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'
import { useEventStore } from '../../../app/store/event'

export default function EventDetailedPage() {
  const {id} = useParams()
  const event = useEventStore((state) => state.events.find((e) => e.id === id))

  if(!event) return <h1 className='flex flex-row gap-5 mt-28 max-w-6xl mx-auto'>Event not found</h1>

  return (
    <div className='flex flex-row gap-5 mt-28 max-w-6xl mx-auto'>
      <section className='w-8/12 flex flex-col gap-5'>
        <EventDetailedHeader event={event}/>
        <EventDetailedInfo event={event}/>
        <EventDetailedChat />
      </section>
      <section className='w-4/12'>
        <EventDetailedSidebar />
      </section>
    </div>
  )
}