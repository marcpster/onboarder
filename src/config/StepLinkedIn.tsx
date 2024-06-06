import { userSettings } from '@/state/userSettings';

export const StepLinkedIn = {
  id: 'StepLinkedIn',
  titles: {},
  initialValues: {
    linkedin: ''
  },
  fields: {
    inputTypes: {
      linkedin: 'url'
    },
    placeholders: {
      linkedin: 'e.g. https://www.linkedin.com/in/williamhgates/'
    }
  },

  //hideNext: true,
  //hidePrevious: true,
  shouldSkip: ( /*values: WizardValues*/ /*,direction: number*/) => {

    // Skip if linkedin has been found
    if (userSettings.linkedin_url) {
      return true;
    }
    return false;
  }
};
