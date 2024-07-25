import { Button, Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import SignedInMenu from './SignedInMenu'
import SignedOutButtons from './SignedOutButtons'
import { useAuthStore } from '../../store/auth'

export default function NavBar() {
  const { authenticated } = useAuthStore((state) => state)

  return (
    // Simple navbar with tailwind
    <header className='bg-gradient-to-br from-blue-900 from-0% via-cyan-700 via-70% to-teal-500 to-90% fixed top-0 left-0 right-0 z-10'>
      <Navbar className=' bg-transparent text-white max-w-6xl mx-auto'>
        <div className='flex flex-row gap-5 items-center justify-start'>
          <Navbar.Brand as={NavLink} to='/' className='flex gap-1'>
            <img src='/logo.png' alt='logo' className='size-8' />
            <span className='font-medium text-xl'>Re-vents</span>
          </Navbar.Brand>
          <NavLink to='/events'>
            <span className='font-medium text-xl' >Events</span>
          </NavLink>
          {/* <NavLink to='/scratch'>
          <span className='font-medium text-xl' >Scratch</span>
        </NavLink> */}
          <Button as={NavLink} to='/createEvent'>Create Event</Button>
        </div>
        <div className='flex flex-row gap-5 justify-end'>
          {authenticated ? <SignedInMenu /> : <SignedOutButtons />}
        </div>
      </Navbar>
    </header>

  )
}