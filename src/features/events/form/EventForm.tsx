import { Button, Card, TextInput } from 'flowbite-react'
import { ChangeEvent, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEventStore } from '../../../app/store/event'

export default function EventForm() {
  let {id} = useParams()
  const event = useEventStore((state) => state.events.find((e) => e.id === id))
  const { createEvent, updateEvent } = useEventStore((state) => state)
  const navigate = useNavigate()

  const initialValues = event ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }

  const [values, setValues] = useState(initialValues)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    id = id ?? crypto.randomUUID()
    e.preventDefault()
    event
      ? updateEvent({ ...event, ...values })
      : createEvent({
        ...values,
        id,
        attendees: [],
        hostPhotoURL: '',
        hostedBy: 'Bob',
      })
    navigate(`/events/${id}`)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Card className='mt-28 mx-auto max-w-6xl'>
      <h1 className='text-tremor-title text-tremor-content-strong font-semibold'>
        {event ? 'Update Event' : 'Create Event'}
      </h1>
      <form className='flex flex-col gap-2 mt-2' onSubmit={onSubmit}>
        <TextInput
          type='text'
          id='title'
          name='title'
          placeholder='Event Title'
          value={values.title}
          onChange={e => handleInputChange(e)}
          required
        />
        <TextInput
          type='text'
          id='category'
          name='category'
          placeholder='Category'
          value={values.category}
          onChange={e => handleInputChange(e)}
          required
        />
        <TextInput
          type='text'
          name='description'
          id='description'
          placeholder='Description'
          value={values.description}
          onChange={e => handleInputChange(e)}
          required
        />
        <TextInput
          type='text'
          name='city'
          id='city'
          placeholder='City'
          value={values.city}
          onChange={e => handleInputChange(e)}
          required
        />
        <TextInput
          type='text'
          name='venue'
          id='venue'
          placeholder='Venue'
          value={values.venue}
          onChange={e => handleInputChange(e)}
          required
        />
        <TextInput
          type='text'
          name='date'
          id='date'
          placeholder='Date'
          value={values.date}
          onChange={e => handleInputChange(e)}
          required
        />
        <div className='flex flex-row gap-3 mt-3 justify-end'>
          <Button as={Link} to='/events' color='gray'>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Card>
  )
}