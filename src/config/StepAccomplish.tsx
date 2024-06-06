import { WizardValues } from 'react-formik-step-wizard';
import { FormikHelpers } from 'formik';
// import eventEmitter from '@/state/eventEmitter';
import { userSettings } from '@/state/userSettings';
// import { postJSON } from '@/lib/postJSON';



// How do we actually sort a user into a persona based on the answer they give to: 
// market my product
// hire talent
// get a job
// meet new people
// up skill
// Stay updated
// Learn new things


export const StepAccomplish = {
    id: 'StepAccomplish',
    title: 'Goals',
    helpText: 'what are you coming to the community to accomplish? (select all that apply)',

    titles: {
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
    // attrs defined under "fields" are for custom step renderer made
    // just for this demo folder, otherwise these aren't part of
    // the step config object
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
