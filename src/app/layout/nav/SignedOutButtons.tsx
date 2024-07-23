import { Button } from 'flowbite-react'
import { useModalStore } from '../../store/modal'

export default function SignedOutButtons() {
  const { openModal } = useModalStore((state) => state)

  return (
    <>
      <Button
        className='bg-transparent border-white'
        onClick={() => openModal('LoginForm')}
      >Login</Button>
      <Button className='bg-transparent border-white'>Register</Button>
    </>
  )
}