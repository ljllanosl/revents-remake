import { Button, Card, TextInput, Textarea, Select } from 'flowbite-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEventStore } from '../../../app/store/event'
import { FieldValues, useForm, Controller } from 'react-hook-form'
import { categoryOptions } from './categoryOptions'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

export default function EventForm() {
  const { register, handleSubmit, control, setValue, formState: { errors, isValid, isSubmitting } } = useForm({
    mode: 'onTouched',
  })
  let { id } = useParams()
  const event = useEventStore((state) => state.events.find((e) => e.id === id))
  const { createEvent, updateEvent } = useEventStore((state) => state)
  const navigate = useNavigate()

  function onSubmit(data: FieldValues) {
    id = id ?? crypto.randomUUID()
    event
      ? updateEvent({ ...event, ...data, date: data.date.toISOString().split('T')[0] })
      : createEvent({
        id,
        title: data.title,
        category: data.category,
        description: data.description,
        city: data.city,
        venue: data.venue,
        attendees: [],
        hostPhotoURL: '',
        hostedBy: 'Bob',
        date: data.date.toISOString().split('T')[0],
      })
    navigate(`/events/${id}`)
  }

  return (
    <Card>
      <h1 className='text-tremor-title text-tremor-content-strong font-semibold'>
        {event ? 'Update Event' : 'Create Event'}
      </h1>
      <form className='flex flex-col gap-2 mt-2' onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder='Event Title'
          defaultValue={event?.title || ''}
          {...register('title', { required: 'Title is required' })}
          color={errors.title ? 'failure' : 'gray'}
          helperText={errors.title ? <span>{`${errors.title.message}`}</span> : ''}
        />
        <Select
          defaultValue={event?.category || ''}
          {...register('category', { required: 'Category is required' })}
          color={errors.category ? 'failure' : 'gray'}
          helperText={errors.category ? <span>{`${errors.category.message}`}</span> : ''}
        >
          {categoryOptions.map((category) => (
            <option key={category.value} value={category.value}>{category.text}</option>
          ))}
        </Select>
        <Textarea
          placeholder='Description'
          defaultValue={event?.description || ''}
          {...register('description', { required: 'Description is required' })}
          color={errors.description ? 'failure' : 'gray'}
          helperText={errors.description ? <span>{`${errors.description.message}`}</span> : ''}
        />
        <TextInput
          placeholder='City'
          defaultValue={event?.city || ''}
          {...register('city', { required: 'City is required' })}
          color={errors.city ? 'failure' : 'gray'}
          helperText={errors.city ? <span>{`${errors.city.message}`}</span> : ''}
        />
        <TextInput
          placeholder='Venue'
          defaultValue={event?.venue || ''}
          {...register('venue', { required: 'Venue is required' })}
          color={errors.venue ? 'failure' : 'gray'}
          helperText={errors.venue ? <span>{`${errors.venue.message}`}</span> : ''}
        />
        <Controller
          name='date'
          control={control}
          rules={{ required: 'Date is required' }}
          defaultValue={event && new Date(event.date) || null}
          render={({ field }) => (
            <DatePicker
              className='block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg'
              selected={field.value}
              onChange={value => setValue('date', value, { shouldValidate: true })}
              dateFormat='MMM d, yyyy'
              placeholderText='Event date & time'
            />
          )}
        />

        <div className='flex flex-row gap-3 mt-3 justify-end'>
          <Button
            disabled={!isValid}
            type='submit'
            isProcessing={isSubmitting}
          >Submit</Button>
          <Button
            as={Link}
            to='/events'
            color='gray'
          >Cancel</Button>
        </div>
      </form>
    </Card>
  )
}