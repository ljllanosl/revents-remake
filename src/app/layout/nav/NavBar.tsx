import { Button, Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import SignedInMenu from './SignedInMenu'
import { useState } from 'react'
import SignedOutButtons from './SignedOutButtons'

export default function NavBar() {
  const [auth, setAuth] = useState(false)

  return (
    // Simple navbar with tailwind
    <header className='bg-gradient-to-br from-blue-900 from-0% via-cyan-700 via-70% to-teal-500 to-90% fixed top-0 left-0 right-0 z-10'>
      <Navbar className=' bg-transparent text-white max-w-6xl mx-auto'>
        <Navbar.Brand as={NavLink} to='/'>
          <img src='./logo.png' alt='logo' className='size-8' />
          <span className='font-medium text-xl'>Re-vents</span>
        </Navbar.Brand>
        <NavLink to='/events'>
          <span className='font-medium text-xl' >Events</span>
        </NavLink>
        <Button as={NavLink} to='/createEvent'>Create Event</Button>
        {auth ? <SignedInMenu setAuth={setAuth} /> : <SignedOutButtons setAuth={setAuth} />}
      </Navbar>
    </header>

  )
}