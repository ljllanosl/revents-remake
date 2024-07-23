import { Dropdown } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { PlusIcon, UserIcon, PowerIcon } from '@heroicons/react/24/solid'
import { useAuthStore } from '../../store/auth'



export default function SignedInMenu() {

  const { currentUser,signOut } = useAuthStore((state) => state)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <div className='flex flex-row gap-2 items-center'>
      <img src='/user.png' alt='user' className='size-9 rounded-full' />
      <Dropdown label={currentUser?.email} dismissOnClick={false} inline>
        <Dropdown.Item as={Link} to='/createEvent'>Create event <PlusIcon className='size-5 ml-2' /></Dropdown.Item>
        <Dropdown.Item>My profile <UserIcon className='size-5 ml-2' /></Dropdown.Item>
        <Dropdown.Item onClick={handleSignOut} >Sign out <PowerIcon className='size-5 ml-2' /></Dropdown.Item>
      </Dropdown>
    </div>
  )
}