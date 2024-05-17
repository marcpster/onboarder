import { useField } from "formik";
/**
 * How to use a custom 
 * https://medium.com/@NataleToscano/how-to-create-custom-field-components-in-formik-abc5124816c4
 * @param props 
 * @returns 
 */
const CustomInput = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;