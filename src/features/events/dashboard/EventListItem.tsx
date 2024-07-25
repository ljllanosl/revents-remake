import EventListAttendee from './EventListAttendee'
import { AppEvent } from '../../../types'
import { Button } from 'flowbite-react'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useEventStore } from '../../../app/store/event'

interface Props {
  event: AppEvent
}

export default function EventListItem({ event }: Props) {
  const { deleteEvent } = useEventStore((state) => state)
  return (
    <div className='py-6 bg-white border border-gray-200 rounded-lg shadow'>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-5 px-6'>
          <div className='w-2/12'>
            <img src={event.hostPhotoURL || '/user.png'} alt='user' className='rounded-full' />
          </div>
          <div className='w-10/12'>
            <h2 className='text-tremor-title text-tremor-content-strong font-semibold'>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Hosted by {event.hostedBy}</p>
          </div>
        </div>
        <hr />
        <div className='flex flex-row items-center gap-2 px-6'>
          <ClockIcon className='size-6' /> {event.date}
          <MapPinIcon className='size-6' /> {event.venue}
        </div>
        <ul className='flex flex-row gap-3 py-5 px-6 bg-slate-200'>
          {event.attendees.map(attendee => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </ul>
        <div className='flex flex-row justify-between items-center px-6 gap-3'>
          <span>{event.description}</span>
          <div className='flex flex-row justify-end gap-3'>
            <Button
              color='success'
              as={Link}
              to={`/events/${event.id}`}
            >View</Button>
            <Button
              color='failure'
              onClick={() => deleteEvent(event.id)}
            >Delete</Button>
          </div>
        </div>
      </div>
    </div>
  )
}