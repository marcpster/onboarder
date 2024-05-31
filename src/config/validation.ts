import * as Yup from 'yup'
//@ts-ignore
import { WizardValues, Values } from "react-formik-step-wizard"

/* Schemas for <Formik validationSchema> */

export const StepGeneralSchema = Yup.object({
  area: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This custom field is required'),
  age: Yup.number().min(0).positive().max(125).required('This field is required'),
  email: Yup.string().email(),
  useSlack: Yup.boolean().oneOf([true],'Testing checkbox validation')
})

/*
  Functions for <Formik validate>.

  Using "validate" is preferred if validation is dependent
  on values that were filled in previous steps.
*/

export function validateUsername(stepValues: Values, values: WizardValues) {
  const errors: any = {}
  if (!stepValues.username) {
    errors.username = 'This field is required'
  } else if (!stepValues.username.toLowerCase().includes(values.StepGeneral.area.toLowerCase())) {
    errors.username = `Username should contain your first name (${values.StepGeneral.area})`
  }
  return errors
}
