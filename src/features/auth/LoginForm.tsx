import { FieldValues, useForm } from 'react-hook-form'
import ModalWrapper from '../../app/common/modals/ModalWrapper'
import { useModalStore } from '../../app/store/modal'
import { Button, TextInput } from 'flowbite-react'
import { useAuthStore } from '../../app/store/auth'

export default function LoginForm() {

  const { register, handleSubmit, formState: { isSubmitting, isValid, isDirty, errors } } = useForm({
    mode: 'onTouched'
  })

  const { closeModal } = useModalStore((state) => state)
  const { signIn } = useAuthStore((state) => state)

  function onSubmit(data: FieldValues) {
    signIn(data.email)
    closeModal()
  }

  return (
    <ModalWrapper header='Sign into re-vents'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <TextInput
          defaultValue=''
          placeholder='Email'
          {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
          color={errors.email ? 'failure' : 'gray'}
          helperText={
            errors.email?.type === 'required' && <span>{'Email is required'}</span> ||
            errors.email?.type === 'pattern' && <span>{'Email is invalid'}</span>
          }
        />
        <TextInput
          type='password'
          defaultValue=''
          placeholder='Password'
          {...register('password', { required: true })}
          color={errors.password ? 'failure' : 'gray'}
          helperText={errors.password && <span>{'Password is required'}</span>}
        />
        <Button
          isProcessing={isSubmitting}
          disabled={!isValid || !isDirty || isSubmitting}
          type='submit'
        >
          Login
        </Button>
      </form>

    </ModalWrapper>
  )
}