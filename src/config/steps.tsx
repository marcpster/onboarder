import { StepGeneralSchema /*,validateUsername*/ } from './validation'
//@ts-ignore
import { WizardValues, StepConfig } from 'react-formik-step-wizard'
import StepEmailCheck from '../components/steps/StepEmailCheck'
// import StepAsync from '../components/steps/StepAsync'
import StepFinal from '../components/steps/StepFinal'

// Emitting an event from anywhere in the application
import { userSettings } from '@/state/userSettings'
import { StepEmail } from '@/config/StepEmail'
import { StepLinkedIn } from './StepLinkedIn'



const steps: StepConfig[] = [
  StepEmail ,
  StepLinkedIn,


  {
    id: 'EmailCheck',
    component: <StepEmailCheck />,
    hideNext: true,
    hidePrevious: true,
    shouldSkip: (values: WizardValues, direction: number) => {

      if (values.StepEmail.emailChecked) {
        return true;
      }
      values.StepEmail.emailChecked = true;

      // Skip if we click "Previous" in "StepAsync"
      if (direction === -1) {
        return true
      }

      if (userSettings.free_email) {
        return true;
      }
      // Skip if email has been filled
      return false ; //!!values.StepGeneral.email
    }
  },


  {
    id: 'StepGeneral',
    title: 'General Settings',
    helpText: 'Select whether you would like to join our Slack channel and newsletter.',

    titles: {
      useSlack: 'Join Our Slack Channel',
      // area: 'Area of Interest'
    },

    initialValues: {
      useSlack: true,
      useNewsletter: true,
      area: '',
      // lastName: 'Doe',
      // age: 30,
    },
    // attrs defined under "fields" are for custom step renderer made
    // just for this demo folder, otherwise these aren't part of
    // the step config object
    fields: {

      inputTypes: {
        useSlack: 'checkbox',
        useNewsletter: 'checkbox',
        area: 'select',
        lastName: 'custom-text',
        // age: 'number',
        // email: 'email'
      },
      placeholders: {
        area: 'e.g. John',
        lastName: 'e.g. Doe',
        // age: 'e.g. 18',
        // email: 'e.g. john@doe.com'
      }
    },
    validationSchema: StepGeneralSchema,
    disableNextOnErrors: true
  },

  // {
  //   id: 'Step2',
  //   helpText: 'Username should include your first name. This step is to demonstrate that we can validate field based on what user typed in the previous step.',
  //   initialValues: {
  //     username: 'mrjohn',
  //   },
  //   fields: {
  //     inputTypes: {
  //       username: 'text',
  //     }
  //   },
  //   validate: validateUsername,
  //   disableNextOnErrors: true
  // },

  // {
  //   id: 'Async',
  //   component: <StepAsync />,
  //   onSubmit: async (stepValues: Values, _allValues: WizardValues, _actions: FormikHelpers<any>) => {
  //     const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
  //     await delay(2000)
  //     return stepValues
  //   }
  // },

  {
    id: 'Final',
    component: <StepFinal />,
    hideNext: true,
    hidePrevious: false 
  }
]

export default steps
