import { StepGeneralSchema /*,validateUsername*/ } from './validation'
//@ts-ignore
import { StepConfig } from 'react-formik-step-wizard'
import StepFinal from '@/components/steps/ComponentFinal'
import { StepEmail } from '@/config/StepEmail'
import { StepLinkedIn } from '@/config/StepLinkedIn'
import { StepEmailCheck } from '@/config/StepEmailCheck'

const steps: StepConfig[] = [
  StepEmail ,
  StepLinkedIn,
  StepEmailCheck,
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


  {
    id: 'Final',
    component: <StepFinal />,
    hideNext: true,
    hidePrevious: false 
  }
]

export default steps
