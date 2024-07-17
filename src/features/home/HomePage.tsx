import { Button } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function HomePage() {
  return (
    <section className='mx-auto bg-gradient-to-br from-blue-900 from-0% via-cyan-700 via-70% to-teal-500 to-90% h-screen flex flex-col text-white items-center justify-center gap-5'>
      <div className='flex flex-row gap-3 items-end font-medium text-5xl'>
        <img src='/logo.png' alt='logo' className='size-12 -mb-1' />
        <h1>Re-vents</h1>
      </div>
      <Button as={NavLink} to='/events' className='bg-transparent border-white'>
        Get started
        <ChevronRightIcon className='ml-2 size-5' />
      </Button>
    </section>
  )
}