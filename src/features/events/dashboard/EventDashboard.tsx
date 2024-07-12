import { sampleData } from '../../../app/api/sampleData'
import EventForm from '../form/EventForm'
import EventList from './EventList'

export default function EventDashboard() {
  return (
    <main className="flex flex-row gap-5 mt-28 container max-w-7xl mx-auto">
      <section className="w-8/12">
        <EventList events={sampleData}/>
      </section>
      <section className="w-4/12">
        <EventForm />
      </section>
    </main>
  )
}
