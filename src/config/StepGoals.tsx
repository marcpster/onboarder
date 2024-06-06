
// Capture the user goals

import { WizardValues, StepConfig } from 'react-formik-step-wizard';
import { FormikHelpers } from 'formik';
import { userSettings } from '@/state/userSettings';

export const StepGoals: StepConfig = {
    id: 'StepGoals',
    title: 'Goals',
    helpText: 'what are you coming to the community to accomplish? (select all that apply)',

    // @MP Extension to allow custom titles
    fieldTitles: {
      //useSlack: 'Join Our Slack Channel',
    },

    initialValues: {
      marketMyProduct: false,
      hireTalent: false,
      getAJob: false,
      meetPeople: false,
      upskill: false,
      stayUpdated: false,
      learn: false,
    },
    // attrs defined under "fields" are for custom step renderer
    fields: {

      inputTypes: {
        marketMyProduct: 'checkbox',
        hireTalent: 'checkbox',
        getAJob: 'checkbox',
        meetPeople: 'checkbox',
        upskill: 'checkbox',
        stayUpdated: 'checkbox',
        learn: 'checkbox',
      },
      // placeholders: {
      //   area: 'e.g. John',
      //   lastName: 'e.g. Doe',
      //   // age: 'e.g. 18',
      //   // email: 'e.g. john@doe.com'
      // }
    },
    //validationSchema: StepGeneralSchema,
    disableNextOnErrors: true,


    onSubmit: async (stepValues: WizardValues, _allValues: WizardValues, _actions: FormikHelpers<any>) => {

      console.log('stepValues', stepValues);
      userSettings.accomplish = stepValues;
      return stepValues;
    }
};
