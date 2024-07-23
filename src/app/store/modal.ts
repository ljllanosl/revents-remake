import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

interface State {
  open: boolean
  type: string | null
  data: any
  openModal: (type: string, data: any) => void
  closeModal: () => void
}

export const useModalStore = create<State>()(
  (persist((set) => ({
    open: false,
    type: null,
    data: null,
    openModal: (type, data) =>
      set(() => ({
        open: true,
        type: type,
        data: data
      })),
    closeModal: () =>
      set(() => ({
        open: false,
        type: null,
        data: null
      }))
  }),
    { name: 'modal' }
  ))
)