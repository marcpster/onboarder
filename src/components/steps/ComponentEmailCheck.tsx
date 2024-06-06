// Looks like you've put in a work address

import { useWizard } from 'react-formik-step-wizard'

function ComponentEmailCheck() {
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

export default ComponentEmailCheck
