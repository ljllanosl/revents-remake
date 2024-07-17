import EventListAttendee from './EventListAttendee'
import { AppEvent } from '../../../types'
import { Button, Card } from 'flowbite-react'
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'

interface Props {
  event: AppEvent
}

export default function EventListItem({ event }: Props) {
  return (
    <Card>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-5'>
          <div className='w-2/12'>
            <img src={event.hostPhotoURL || '/user.png'} alt='user' className='rounded-full' />
          </div>
          <div className='w-10/12'>
            <h2 className='text-tremor-title text-tremor-content-strong font-semibold'>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Hosted by {event.hostedBy}</p>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <ClockIcon className='size-4' /> {event.date}
          <MapPinIcon className='size-4' /> {event.venue}
        </div>
        <ul className='flex flex-row gap-3 py-5'>
          {event.attendees.map(attendee => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </ul>
        <div className='flex flex-row justify-between items-center '>
          <span>{event.description}</span>
          <div className='flex flex-row justify-end gap-3'>
            <Button
              color='success'
            >View</Button>
            <Button
              color='failure'
            >Delete</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}