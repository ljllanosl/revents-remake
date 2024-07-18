import { Button, Card } from 'flowbite-react'
import { InformationCircleIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/solid'

export default function EventDetailedInfo() {
  return (
    <Card>
      <div className='divide-y divide-gray-200'>
        <div className='flex flex-row pb-3 items-center'>
          <div className='w-1/12'>
            <InformationCircleIcon color='teal' name='info' className='size-7' />
          </div>
          <div className='w-11/12'>
            <p>Event Description</p>
          </div>
        </div>
        <div className='flex flex-row py-3 items-center'>
          <div className='w-1/12'>
            <CalendarIcon name='calendar' color='teal' className='size-7' />
          </div>
          <div className='w-11/12'>
            <span>Event Date</span>
          </div>
        </div>
        <div className='flex flex-row pt-3 items-center'>
          <div className='w-1/12'>
            <MapPinIcon name='marker' color='teal' className='size-7' />
          </div>
          <div className='w-9/12'>
            <span>Event Venue</span>
          </div>
          <div className='w-2/12'>
            <Button color='success'>Show Map</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}