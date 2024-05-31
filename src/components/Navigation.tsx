import { useWizard } from 'react-formik-step-wizard'

import { useFormikContext } from 'formik'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ClipLoader from 'react-spinners/ClipLoader'

import eventEmitter from '@/eventEmitter';
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

    eventEmitter.on('myEvent', (data: any) => {
      console.log('Event received:', data);
      setisWaiting(true);
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
              disabled={disableNext}
              type='submit'
            >
              {(isLoading || isWaiting) && (
                <span className='mr-1 loading'>
                  <ClipLoader size={11} color='#757575' />
                </span>
              )}
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
