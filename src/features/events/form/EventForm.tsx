import { Button, Card, DatePicker, Select, SelectItem, Textarea, TextInput } from '@tremor/react'

interface Props {
  setFormOpen: (formOpen: boolean) => void
}

export default function EventForm({ setFormOpen }: Props) {
  return (
    <Card>
      <h1 className='text-tremor-title text-tremor-content-strong font-semibold'>Create Event</h1>
      <form action="" className="flex flex-col gap-2 mt-2">
        <TextInput
          type='text'
          id="title"
          name="title"
          placeholder='Event Title'
          required
        />
        <Select
          id='category'
          name='category'
          defaultValue="1"
        >
          <SelectItem value="1">Music</SelectItem>
          <SelectItem value="2">Sport</SelectItem>
          <SelectItem value="3">Culture</SelectItem>
        </Select>
        <Textarea
          name="description"
          id="description"
          placeholder='Description'></Textarea>
        <TextInput
          type='text'
          name="city"
          id="city"
          placeholder='City'
          required
        />
        <TextInput
          type='text'
          name="venue"
          id="venue"
          placeholder='Venue'
          required
        />
        <DatePicker id="date" />
        <div className='flex flex-row gap-3 mt-3 justify-end'>
          <Button
            onClick={() => setFormOpen(false)}
            type="button"
            variant='secondary'
          >Cancel</Button>
          <Button type="submit" color='green'>Submit</Button>
        </div>

      </form>
    </Card>
  )
}