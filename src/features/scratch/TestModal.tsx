import ModalWrapper from '../../app/common/modals/ModalWrapper'
import { useModalStore } from '../../app/store/modal'

export default function TestModal() {

  const { data } = useModalStore((state) => state)

  return (
    <ModalWrapper header={'Testing 123'}>
      <div>Test data is {data}</div>
    </ModalWrapper>
  )
}