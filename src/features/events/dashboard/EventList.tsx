import { AppEvent } from '../../../types'
import EventListItem from './EventListItem'

interface Props {
  events: AppEvent[]
}

export default function EventList({ events}: Props) {
  return (
    <div className='flex flex-col gap-5'>
      {events.map(event => (
        <EventListItem
          key={event.id}
          event={event}
        />
      ))}
    </div>
  )
}