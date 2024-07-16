import { AppEvent } from '../../../types'
import EventListItem from './EventListItem'

interface Props {
  events: AppEvent[]
  selectEvent: (event: AppEvent) => void
}

export default function EventList({ events, selectEvent

}: Props) {
  return (
    <div className='flex flex-col gap-5'>
      {events.map(event => (
        <EventListItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
        />
      ))}
    </div>
  )
}