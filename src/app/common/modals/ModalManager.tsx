import TestModal from '../../../features/scratch/TestModal'
import { useModalStore } from '../../store/modal'

export default function ModalManager() {
  const modalLookup = {
    TestModal
  }

  const { type, data, open } = useModalStore((state) => state)

  let renderedModal

  if (open && type) {
    const ModalComponent = (modalLookup as any)[type]
    renderedModal = <ModalComponent data={data} />
  }

  return (
    <span>{renderedModal}</span>
  )
}