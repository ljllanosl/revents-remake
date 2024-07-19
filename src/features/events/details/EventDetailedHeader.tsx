import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { AppEvent } from '../../../types'

interface Props {
  event: AppEvent
}

export default function EventDetailedHeader({event}: Props) {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow'>
      <div className='relative'>
        <img src={`/categoryImages/${event.category}.jpg`} alt='Event' className='w-full object-cover rounded-t-lg brightness-50' />
        <div className='flex flex-col absolute bottom-5 left-5 text-white'>
          <h1 className='font-medium text-2xl'>{event.title}</h1>
          <p>{event.date}</p>
          <p>
            Hosted by <strong>{event.hostedBy}</strong>
          </p>
        </div>
      </div>

      <div className='flex flex-row justify-between p-4'>
        <div className='flex flex-row gap-3'>
          <Button color='gray'>Cancel My Place</Button>
          <Button color='success'>JOIN THIS EVENT</Button>
        </div>
        <Button as={Link} to={`/manage/${event.id}`} color='warning'>
          Manage Event
        </Button>
      </div>
    </div>
  )
}