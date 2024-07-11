import EventList from './EventList'

export default function EventDashboard() {
  return (
    <main className="flex flex-row gap-5 mt-28 container max-w-5xl mx-auto">
      <div className="w-8/12">
        <EventList />
      </div>
      <div className="w-4/12">
        <h2>Right column</h2>
      </div>
    </main>
  )
}
