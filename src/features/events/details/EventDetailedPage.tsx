import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'

export default function EventDetailedPage() {
  return (
    <div className='flex flex-row gap-5 mt-28 max-w-6xl mx-auto'>
      <section className='w-8/12'>
        <EventDetailedHeader />
        <EventDetailedInfo />
        <EventDetailedChat />
      </section>
      <section className='w-4/12'>
        <EventDetailedSidebar />
      </section>
    </div>
  )
}