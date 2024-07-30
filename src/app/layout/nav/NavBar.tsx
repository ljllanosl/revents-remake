import { Button, Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import SignedInMenu from './SignedInMenu'
import SignedOutButtons from './SignedOutButtons'
import { useAuthStore } from '../../store/auth'


export default function NavBar() {
  const { authenticated } = useAuthStore((state) => state)

  return (
    <header className='bg-gradient-to-br from-blue-900 from-0% via-cyan-700 via-70% to-teal-500 to-90% fixed top-0 left-0 right-0 z-10'>
      <Navbar className='bg-transparent text-white px-4 max-w-screen-md mx-auto'>
        <div className='flex flex-row gap-5 items-center justify-start'>
          <Navbar.Brand as={NavLink} to='/' className='flex gap-1'>
            <img src='/logo.png' alt='logo' className='size-8' />
            <span className='font-medium text-xl hidden sm:block'>Re-vents</span>
          </Navbar.Brand>
          <NavLink to='/events'>
            <span className='font-medium text-xl' >Events</span>
          </NavLink>
          {/* <NavLink to='/scratch'>
          <span className='font-medium text-xl' >Scratch</span>
        </NavLink> */}
          <Button as={NavLink} to='/createEvent'>
            <span className='hidden sm:block'>Create Event</span>
            <span className='sm:hidden font-bold'>+</span>
          </Button>
        </div>
        <div className='flex flex-row gap-5 justify-end'>
          {authenticated ? <SignedInMenu /> : <SignedOutButtons />}
        </div>
      </Navbar>
    </header>

  )
}