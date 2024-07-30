import { Button } from 'flowbite-react'
import { useModalStore } from '../../store/modal'
import { ArrowRightEndOnRectangleIcon, PencilSquareIcon } from '@heroicons/react/24/solid'

export default function SignedOutButtons() {
  const { openModal } = useModalStore((state) => state)

  return (
    <>
      <Button
        className='bg-transparent border-white'
        onClick={() => openModal('LoginForm')}
      >
        <span className='hidden sm:block'>Login</span>
        <span className='sm:hidden'><ArrowRightEndOnRectangleIcon className='size-6' /></span>
      </Button>
      <Button className='bg-transparent border-white'>
        <span className='hidden sm:block'>Register</span>
        <span className='sm:hidden'><PencilSquareIcon className='size-6' /></span>
      </Button>
    </>
  )
}