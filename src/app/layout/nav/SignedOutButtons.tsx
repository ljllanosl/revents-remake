import { Button } from 'flowbite-react'

interface Props{
  setAuth: (auth: boolean) => void
}

export default function SignedOutButtons({setAuth}: Props) {
  return (
    <>
      <Button className='bg-transparent border-white' onClick={() => setAuth(true)}>Login</Button>
      <Button className='bg-transparent border-white'>Register</Button>
    </>
  )
}