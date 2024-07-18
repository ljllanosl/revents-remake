export default function EventDetailedSidebar() {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow'>
      <div className='mb-4 p-2 bg-teal-500 rounded-t-lg'>
        <h1 className='font-medium text-xl text-white text-center'>2 People Going</h1>
      </div>
      <div className='flow-root px-4'>
        <ul role='list' className='divide-y divide-gray-200'>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img className='w-8 h-8 rounded-full' src='/user.png' alt='Neil image' />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  Neil Sims
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@windster.com
                </p>
              </div>
              <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                $320
              </div>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img className='w-8 h-8 rounded-full' src='/user.png' alt='Neil image' />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  Neil Sims
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@windster.com
                </p>
              </div>
              <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                $320
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}