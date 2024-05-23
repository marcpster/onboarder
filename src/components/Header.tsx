import { useWizard } from 'react-formik-step-wizard'

function Header() {
  const isAnimated = true;

  const { stepNumber, totalSteps } = useWizard()
  const completed = `${((stepNumber - 1) / (totalSteps - 1)) * 100}%`

  return (
    <header className='pt-4 pb-3'>
      {/* Title, steps, source code link */}
      <div className='px-5 flex justify-between items-center prose max-w-none'>
        <h3 className='mb-0 text-base sm:text-xl'>onboardatron</h3>
        <div className='flex items-center'>
          <div className='mr-3 text-sm'>
            <span className='hidden min-[400px]:inline'>Step</span> {stepNumber} / {totalSteps}
          </div>
        </div>
      </div>
      {/* Progress bar */}
      <div className='w-full bg-gray-600 h-1 mt-[17px]'>
        <div
          style={{ width: completed }}
          className={'h-full bg-success transition-all ' + (isAnimated ?  'duration-500' : '')}
        />
      </div>
    </header>
  )
}

export default Header
