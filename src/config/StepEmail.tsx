
// Capture email

import { WizardValues, StepConfig } from 'react-formik-step-wizard';
import { FormikHelpers } from 'formik';
import eventEmitter from '@/state/eventEmitter';
import { userSettings } from '@/state/userSettings';
import { postJSON } from '@/lib/postJSON';

export const StepEmail: StepConfig = {

  id: 'StepEmail',
  title: 'Getting Your Details',
  helpText: 'Please enter your email',
  fieldTitles: {},
  initialValues: {
    email: '',
    //linkedin: ''
  },
  fields: {
    inputTypes: {
      email: 'email',
      linkedin: 'hidden',
      emailChecked: false
    },
    placeholders: {
      email: 'e.g. john@doe.com'
    }
  },
  disableNextOnErrors: true,

  validate: async (values: WizardValues /*, actions: FormikHelpers<any>*/) => {
    console.log('validating...');

    const errors: any = {};
    if (!values.email) {
      errors.email = 'Please enter your email';
      return errors;
    }

    eventEmitter.emit('wait', { waiting: true });
    const result = await postJSON({
      url: "/api/v2/contact_enrichment",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_MLOPS_APP_KEY}`,
      },
      bodyJson: {
        "clearbit": true,
        "apollo": true,
        "proxycurl": true,
        "email": values.email
      }
    }
    );
    eventEmitter.emit('wait', { waiting: false });

    console.log(result.json);
    userSettings.output = result.json.output;

    if (result.status === 400) {
      errors.email = result.json?.message;
    }
    else if (result.status !== 200) {
      errors.email = `Server response: ${result?.status}`;
    }
    userSettings.linkedin_url = result.json.output.linkedin_url;
    userSettings.free_email = result.json.output.free_email;

    return errors;
  },

  validateOnBlur: false,
  validateOnChange: false,

  onSubmit: async (stepValues: WizardValues, _allValues: WizardValues, _actions: FormikHelpers<any>) => {

    console.log('output', userSettings);
    return stepValues;
  }
};
