import { useWizard } from 'react-formik-step-wizard'

// - Looks like you've put in a work address:
//   - (Dan to surface into summary)
//   - 
//   "Will you always have access to this email/is this a biz email?"
//   "Using a personal email allows access even after changing jobs"
//   - Checkbox confirming email , cchecking adds new text field for personal email

// - Use the example for the warning step when a business email is supplied (also hides next/prev)


function StepEmailCheck() {
  const { goToStep } = useWizard()

  return (
    <div className='prose max-w-none'>
      <h2>Warning</h2>
      <p>Seems like this may be your business email. Will you always have access to this email
        or would you like to change to a personal email?</p>
      <div className='flex gap-4'>
        <button className='btn' type='button' onClick={() => goToStep(0)}>Change Email</button>
        <button className='btn' type='submit'>Continue</button>
      </div>
    </div>
  )
}

export default StepEmailCheck
