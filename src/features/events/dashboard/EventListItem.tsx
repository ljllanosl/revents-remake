import { RiMapPin2Fill, RiTimeFill } from '@remixicon/react'
import { Button, Card, Divider, Icon } from '@tremor/react'
import EventListAttendee from './EventListAttendee'
import { AppEvent } from '../../../types'

interface Props {
  event: AppEvent
}

export default function EventListItem({ event }: Props) {
  return (
    <Card>
      <div className='flex flex-col'>
        <div className="flex flex-row gap-5">
          <div className="w-2/12">
            <img src={event.hostPhotoURL} alt="user" className='rounded-full' />
          </div>
          <div className="w-10/12">
            <h2 className='text-tremor-title text-tremor-content-strong font-semibold'>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Hosted by {event.hostedBy}</p>
          </div>
        </div>
        <Divider/>
        <div className='flex flex-row items-center'>
          <Icon icon={RiTimeFill} /> {event.date}
          <Icon icon={RiMapPin2Fill} /> {event.venue}
        </div>
        <ul className='flex flex-row gap-3 py-5'>
          {event.attendees.map(attendee => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </ul>
        <div className='flex flex-row justify-between items-center'>
          <span>{event.description}</span>
          <Button color='teal' variant='primary'>View</Button>
        </div>
      </div>
    </Card>
  )
}