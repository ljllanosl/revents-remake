import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AppEvent } from '../../types'
import { sampleData } from '../api/sampleData'

interface EventState {
  events: AppEvent[]
  createEvent: (event: AppEvent) => void
  updateEvent: (event: AppEvent) => void
  deleteEvent: (id: string) => void
}

export const useEventStore = create<EventState>()(
  persist(
    (set) => ({
      events: sampleData,
      createEvent: (event) =>
        set((state) => ({
          events: [...state.events, event]
        }))
      ,
      updateEvent: (event) =>
        set((state) => ({
          events: state.events.map((e) => (e.id === event.id ? event : e)),
        }))
      ,
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        }))
    }),
    { name: 'events' }
  )
)


