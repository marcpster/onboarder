import { ErrorMessage, Field, useFormikContext } from 'formik'
import CustomInput from '@/components/CustomInput'

interface Props {
  activeStep: any,
  initialValues: any,
  titles: any,
  values: any
}

function DefaultStepContentRenderer({
  activeStep,
  initialValues,
  values
}: Props) {

  function humanize(field: string) {
    field = field[0].toUpperCase() + field.slice(1)
    return field.replace(/[A-Z]/g, ' $&')
  }

  function getTitle(field: string) {
    return activeStep?.titles?.[field] || humanize(field);
  }

  function getFieldConstraints(yupSchema: any, fieldType: string) {
    const constraints: any = {}
    if (fieldType === 'number') {
      constraints.onKeyDown = (evt: any) => {
        if (['e', 'E', '+', '-', '.', ','].includes(evt.key)) {
          evt.preventDefault()
        }
      }
    }
    const tests: object[] = yupSchema?.tests || []
    tests.forEach((test: any) => {
      switch (test.OPTIONS.name) {
        case 'min':
          constraints.min = test.OPTIONS.params.min || test.OPTIONS.params.more
          break
        case 'max':
          constraints.max = test.OPTIONS.params.max
          break
      }
    })
    return constraints
  }

  const { validationSchema, fields } = activeStep

  return (
    <div id='default' className='prose max-w-none'>
      <h2>{activeStep.title}</h2>
      <p>{activeStep.helpText}</p>
      <div className='flex flex-row gap-6 flex-wrap'>
        {Object.keys(initialValues || {}).map(field => (
            <div key={field} className='grow shrink-0 basis-72'>
              <label htmlFor={field} className='block mb-2 text-sm font-medium text-white'>{getTitle(field)}</label>
              <ErrorMessage name={field}>
                {msg => <div className='text-red-400'>{msg}</div>}
              </ErrorMessage>
              <MyField 
                id={field}
                name={field}
                value={values[field] /* @MP: ignore for checkboxes */}
                type={fields?.inputTypes[field]} 
                placeholder={fields?.placeholders?.[field]}
                constraints={getFieldConstraints(validationSchema?.fields?.[field], fields?.inputTypes[field])}
                />
              </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Create a Formix Field object
 * @param props 
 * @returns Formix <Field/> object
 */
function MyField (props: any) {
  const {id, type, value, placeholder, constraints} = props;

  console.log(props)

  if (type === 'checkbox') {

    // Checkboxes slight speccial case, e.g. break if "value" attribute set
    // https://formik.org/docs/examples/checkboxes 
    return (
      // <CustomInput label={id} name={id} type="text" />

      <Field       
        id={id}
        name={id}
        type="checkbox" className="checkbox" />
    );
  }
  else if (type === 'custom-text') {
    // Here is our custom text field that we are testing
    return (
      <CustomInput label={id} name={id} type="text" />
    );
  }
  else if (type === 'select') {
    // Select
    //const [selectedPlayer1,setSelectedPlayer1] = useState('')
    //const [selectedPlayer2,setSelectedPlayer2] = useState('')
    const { values, setFieldValue } = useFormikContext();

    let options = [
      {id: 'o1', title: 'Option 1', disabled: false},
      {id: 'o2', title: 'Option 2', disabled: false}
    ];
    //onChange={(e:any) => setSelectedPlayer1(e.target.value)}
    //value={selectedPlayer1}

    return (
      <Field as="select" 
        name={id}
        onChange={(e:any) => setFieldValue(id, e.target.value)}
        >

        <option disabled value="">(Select a player 1)</option>
        {options && options.map(op => 
            <option disabled={op.disabled} value={op.id} key={op.id}>{op.title}</option>
        )}
      </Field>
    );
  }
  else {
    return (
      <Field
      id={id}
      name={id}
      value={value /* @MP: fix checkbox */}
      type={type}
      placeholder={placeholder}
      className={'bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'}
      {...constraints}
      />
    );
  }
}

export default DefaultStepContentRenderer
