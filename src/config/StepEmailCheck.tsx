import { WizardValues } from 'react-formik-step-wizard';
import { userSettings } from '@/state/userSettings';
import ComponentEmailCheck from '@/components/steps/ComponentEmailCheck'

export const StepEmailCheck = {
  id: 'EmailCheck',
  hideNext: true,
  hidePrevious: true,

  shouldSkip: (values: WizardValues, direction: number) => {

    if (values.StepEmail.emailChecked) {
      return true;
    }
    values.StepEmail.emailChecked = true;

    // Skip if we click "Previous"
    if (direction === -1) {
      return true;
    }

    // Skip if email has been filled
    if (userSettings.free_email) {
      return true;
    }

    return false;
  },
  component: <ComponentEmailCheck/>

};
