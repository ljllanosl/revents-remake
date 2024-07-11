import EventListItem from './EventListItem'

export default function EventList() {
  return (
    <div className='flex flex-col gap-5'>
      <EventListItem />
      <EventListItem />
      <EventListItem />
      <EventListItem />
    </div>
  )
}