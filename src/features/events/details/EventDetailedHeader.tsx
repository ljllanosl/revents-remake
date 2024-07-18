import { Button, Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function EventDetailedHeader() {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow'>
      <div className='relative'>
        <img src='/categoryImages/drinks.jpg' alt='Event' className='w-full object-cover rounded-t-lg brightness-50' />
        <div className='flex flex-col absolute bottom-5 left-5 text-white'>
          <h1 className='font-medium text-2xl'>Event Title</h1>
          <p>Event Date</p>
          <p>
            Hosted by <strong>Bob</strong>
          </p>
        </div>
      </div>

      <div className='flex flex-row justify-between p-4'>
        <div className='flex flex-row gap-3'>
          <Button color='gray'>Cancel My Place</Button>
          <Button color='success'>JOIN THIS EVENT</Button>
        </div>
        <Button as={Link}  to={'/manage/something'} color='warning'>
          Manage Event
        </Button>
      </div>
    </div>
  )
}