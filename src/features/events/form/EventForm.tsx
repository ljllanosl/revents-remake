import { Button, Card, DatePicker, Select, SelectItem, Textarea, TextInput } from '@tremor/react'
import { ChangeEvent, useState } from 'react'
import { AppEvent } from '../../../types'

interface Props {
  setFormOpen: (formOpen: boolean) => void
  addEvent: (event: AppEvent) => void
  selectedEvent: AppEvent | null
}

export default function EventForm({ setFormOpen, addEvent, selectedEvent }: Props) {
  const initialValues = selectedEvent ?? {
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
    addEvent({
      ...values,
      id: crypto.randomUUID(),
      attendees: [],
      hostPhotoURL: '',
      hostedBy: '',
    })
    setFormOpen(false)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Card>
      <h1 className='text-tremor-title text-tremor-content-strong font-semibold'>Create Event</h1>
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
        {/* <Select
          id='category'
          name='category'
          defaultValue='1'
        >
          <SelectItem value='1'>Music</SelectItem>
          <SelectItem value='2'>Sport</SelectItem>
          <SelectItem value='3'>Culture</SelectItem>
        </Select> */}
        {/* <Textarea
          name='description'
          id='description'
          placeholder='Description'
        ></Textarea> */}
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
          <Button
            onClick={() => setFormOpen(false)}
            type='button'
            variant='secondary'
          >Cancel</Button>
          <Button type='submit' color='green'>Submit</Button>
        </div>
      </form>
    </Card>
  )
}