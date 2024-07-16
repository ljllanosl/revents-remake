import { Attendee } from '../../../types'

interface Props {
  attendee: Attendee
}

export default function EventListAttendee({ attendee }: Props) {
  return (
    <li>
      <img src={attendee.photoURL} alt='user' className='rounded-full size-8' />
    </li>
  )
}