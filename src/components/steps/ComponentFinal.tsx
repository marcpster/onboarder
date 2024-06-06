// import { useState } from 'react'
import { useWizard } from 'react-formik-step-wizard'
import { userSettings } from '@/state/userSettings'

function StepFinal() {
  const { values /*, updateStep*/ } = useWizard()
  
  // const [ truthy, setTruthy ] = useState(true)
  // function toggle() {
  //   const res = !truthy
  //   setTruthy(res)
  //   updateStep('hideNext', res)
  // }

  let data = {}
  Object.keys(values).forEach(stepId => {
    data = {
      ...data,
      ...values[stepId]
    }
  })

  return (
    <div className='prose prose-neutral max-w-none'>
      <h2>Congratulations!</h2>
      <div className='flex flex-wrap gap-4 justify-between'>
        <p className='my-0'>🎉 Here are your settings:</p>
        {/* <button className='btn' onClick={toggle} type='button'>Toggle hideNext</button> */}
      </div>
      <code className='text-sm sm:text-base bg-transparent'>
        <pre className='mt-0'>
          {JSON.stringify(userSettings, null, 2)}
        </pre>
      </code>
    </div>
  )
}

export default StepFinal
