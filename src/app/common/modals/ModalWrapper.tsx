import { ReactNode } from 'react'
import { Modal } from 'flowbite-react'
import { useModalStore } from '../../store/modal'


type Props = {
  children: ReactNode
  header?: string
}

export default function ModalWrapper({ children, header }: Props) {

  const { closeModal, open } = useModalStore((state) => state)
  return (

    <Modal show={open} onClose={() => closeModal()} >
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}