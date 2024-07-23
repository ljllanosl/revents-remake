import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ScratchState {
  count: number
  increment: () => void
  decrement: () => void
  incrementBy: (amount: number) => void
}

export const useScratchStore = create<ScratchState>()(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 }), false, 'increment'),
    decrement: () => set((state) => ({ count: state.count - 1 }), false, 'decrement'),
    incrementBy: (amount: number) => set((state) => ({ count: state.count + amount }), false, 'incrementBy'),
  }),
    { name: 'scratch' }
  )
)