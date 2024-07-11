import { Button } from '@tremor/react'

export default function NavBar() {
  return (
    // Simple navbar with tailwind
    <header>
      <nav className="bg-gradient-to-r from-blue-900 from-0% via-cyan-700 via-70% to-teal-500 to-90%  p-4 fixed top-0 left-0 right-0 z-10">
        <div className="container max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-5 text-white">
              <a href="#" className='flex flex-row gap-5'>
                <img src="./logo.png" alt="logo" className='size-10' />
                <h1 className="text-2xl">Re-vents</h1>
              </a>
              <Button color='green'>Create Event</Button>
            </div>
            <div className='flex flex-row gap-5'>
              <Button variant="primary">Login</Button>
              <Button variant="primary">Register</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
} 0