import { Button } from 'flowbite-react'
import { useScratchStore } from '../../app/store/store'
import { useModalStore } from '../../app/store/modal'

export default function Scratch() {
  const { count, increment, decrement, incrementBy } = useScratchStore((state) => state)
  const { openModal } = useModalStore((state) => state)

  return (
    <div className='mt-28 mx-auto max-w-6xl'>
      <h1>Scratch page</h1>
      <h3>The data is: {count}</h3>
      <div className='flex flex-row gap-1'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={() => incrementBy(5)}>Increment by 5</Button>
        <Button onClick={() => openModal('TestModal', count)}>Open modal</Button>
      </div>
    </div >
  )
}