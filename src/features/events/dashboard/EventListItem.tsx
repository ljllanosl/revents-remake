import { RiMapPin2Fill, RiTimeFill } from '@remixicon/react'
import { Button, Card, Icon, List } from '@tremor/react'
import EventListAttendee from './EventListAttendee'

export default function EventListItem() {
  return (
    <Card>
      <div className='flex flex-col gap-3'>
        <div className="flex flex-row gap-5">
          <div className="w-2/12">
            <img src="/user.png" alt="user" className='rounded-full' />
          </div>
          <div className="w-10/12">
            <h2 className='text-tremor-title text-tremor-content-strong font-semibold'>Event Title</h2>
            <p>Event Date</p>
            <p>Hosted by</p>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <Icon icon={RiTimeFill} /> Date
          <Icon icon={RiMapPin2Fill} /> Venue
        </div>
        <ul className='flex flex-row gap-3 py-5'>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </ul>
        <div className='flex flex-row justify-between items-center'>
          <span>Description of the event</span>
          <Button color='teal' variant='primary'>View</Button>
        </div>
      </div>
    </Card>
  )
}