
// Opt-in to Newsletters, Sponsors

import { WizardValues, StepConfig } from 'react-formik-step-wizard';
import { FormikHelpers } from 'formik';
import { userSettings } from '@/state/userSettings';

export const StepOptins: StepConfig = {
    id: 'StepOptins',
    title: 'Newsletter/Sponsors',
    helpText: 'Stay in the loop! Check these boxes to opt-in to our newsletter and share your details with sponsors.',

    fieldTitles: {
      //useSlack: 'Join Our Slack Channel',
    },

    initialValues: {
      newsLetter: false,
      shareDetailsWithSponsors: false,
    },
    // attrs defined under "fields" are for custom step renderer made
    // just for this demo folder, otherwise these aren't part of
    // the step config object
    fields: {

      inputTypes: {
        newsLetter: 'checkbox',
        shareDetailsWithSponsors: 'checkbox',
      },
      // placeholders: {
      // }
    },
    //validationSchema: StepGeneralSchema,
    disableNextOnErrors: true,


    onSubmit: async (stepValues: WizardValues, _allValues: WizardValues, _actions: FormikHelpers<any>) => {

      userSettings.optins = stepValues;
      return stepValues;
    }
};
