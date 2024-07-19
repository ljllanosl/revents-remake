import { Button, Card } from 'flowbite-react'
import { InformationCircleIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { AppEvent } from '../../../types'

interface Props {
  event: AppEvent
}

export default function EventDetailedInfo({event}: Props) {
  return (
    <Card>
      <div className='divide-y divide-gray-200'>
        <div className='flex flex-row pb-3 items-center'>
          <div className='w-1/12'>
            <InformationCircleIcon color='teal' name='info' className='size-7' />
          </div>
          <div className='w-11/12'>
            <p>{event.description}</p>
          </div>
        </div>
        <div className='flex flex-row py-3 items-center'>
          <div className='w-1/12'>
            <CalendarIcon name='calendar' color='teal' className='size-7' />
          </div>
          <div className='w-11/12'>
            <span>{event.date}</span>
          </div>
        </div>
        <div className='flex flex-row pt-3 items-center'>
          <div className='w-1/12'>
            <MapPinIcon name='marker' color='teal' className='size-7' />
          </div>
          <div className='w-9/12'>
            <span>{event.venue}</span>
          </div>
          <div className='w-2/12'>
            <Button color='success'>Show Map</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}