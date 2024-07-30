import { Dropdown } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { PlusIcon, UserIcon, PowerIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { useAuthStore } from '../../store/auth'



export default function SignedInMenu() {

  const { currentUser, signOut } = useAuthStore((state) => state)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <div className='flex flex-row gap-2 items-center'>

      <Dropdown
        label=''
        dismissOnClick={false}
        renderTrigger={() => (
          <div className='flex flex-row gap-2 items-center'>
            <img src='/user.png' alt='user' className='size-9 rounded-full' />
            <span className='hidden sm:block'>{currentUser?.email} </span>
            <span><ChevronDownIcon className='size-4' /></span>
          </div>
        )}>
        <Dropdown.Item as={Link} to='/createEvent' icon={PlusIcon}>Create event</Dropdown.Item>
        <Dropdown.Item icon={UserIcon}>My profile</Dropdown.Item>
        <Dropdown.Item onClick={handleSignOut} icon={PowerIcon} >Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  )
}