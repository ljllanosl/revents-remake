import { Button, Card, TextInput } from 'flowbite-react'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export default function EventForm() {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }

  const [values, setValues] = useState(initialValues)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(values)
    // selectedEvent
    //   ? updatedEvent({ ...selectedEvent, ...values })
    //   : addEvent({
    //     ...values,
    //     id: crypto.randomUUID(),
    //     attendees: [],
    //     hostPhotoURL: '',
    //     hostedBy: '',
    //   })
    // setFormOpen(false)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Card className='mt-28 mx-auto max-w-6xl'>
      <h1 className='text-tremor-title text-tremor-content-strong font-semibold'>
        {'Create Event'}
      </h1>
      <form className='flex flex-col gap-2 mt-2' onSubmit={onSubmit}>
        <TextInput
          type='text'
          id='title'
          name='title'
          placeholder='Event Title'
          value={values.title}
          onChange={e => handleInputChange(e)}
        />
        <TextInput
          type='text'
          id='category'
          name='category'
          placeholder='Category'
          value={values.category}
          onChange={e => handleInputChange(e)}
        />
        <TextInput
          type='text'
          name='description'
          id='description'
          placeholder='Description'
          value={values.description}
          onChange={e => handleInputChange(e)}
        />
        <TextInput
          type='text'
          name='city'
          id='city'
          placeholder='City'
          value={values.city}
          onChange={e => handleInputChange(e)}
        />
        <TextInput
          type='text'
          name='venue'
          id='venue'
          placeholder='Venue'
          value={values.venue}
          onChange={e => handleInputChange(e)}
        />
        <TextInput
          type='text'
          name='date'
          id='date'
          placeholder='Date'
          value={values.date}
          onChange={e => handleInputChange(e)}
        />
        <div className='flex flex-row gap-3 mt-3 justify-end'>
          <Button as={Link} to='/events' color='gray'>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Card>
  )
}