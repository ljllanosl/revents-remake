import { create } from 'zustand'

interface State {
  open: boolean
  type: string | null
  data: any
  openModal: (type: string, data?: any) => void
  closeModal: () => void
}

export const useModalStore = create<State>(
  (set) => ({
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
  })
)