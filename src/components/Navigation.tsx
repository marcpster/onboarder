import { useWizard } from 'react-formik-step-wizard'

import { useFormikContext } from 'formik'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ClipLoader from 'react-spinners/ClipLoader'

import eventEmitter from '@/state/eventEmitter';
import { useState, useEffect } from 'react';

function Navigation() {
  let {
    goToPreviousStep,
    isFirstStep,
    isLoading,
    activeStep: {
      hidePrevious,
      hideNext,
      disableNext,
      disableNextOnErrors
    }
  } = useWizard()
  const { isValid, submitForm } = useFormikContext()
  disableNext = isLoading || disableNext || (disableNextOnErrors && !isValid)

  const [isWaiting, setisWaiting] = useState(false);  

  useEffect(() => {

    eventEmitter.on('wait', (data: any) => {
      console.log('WAIT Event received:', data);
      setisWaiting(data.waiting);
    });

    // Cleanup the event listener on component unmount
    return () => { eventEmitter.removeAllListeners('myEvent'); }
  }, []);

  return (
    <div className='navigation'>
      <div className={'navigation-wrapper ' + (hidePrevious ? 'justify-end' : 'justify-between')}>
        {/* "Previous" button */}
        {!hidePrevious && (
          <button
            className='btn'
            onClick={goToPreviousStep}
            disabled={isFirstStep}
            type='button'
          >
            <BsArrowLeft className='w-8 h-8 fill-current' />
            <span>Previous</span>
          </button>
        )}
        {/* "Next" button */}
        {!hideNext && (
          // Still possible to trigger submit even though button is disabled.
          // Main reason is to display validation errors.
          <div onClick={disableNext ? submitForm : undefined}>
            <button
              className='btn'
              type='submit'
            >
              <span>Next Bit</span>
              <BsArrowRight className='w-8 h-8 fill-current' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation
