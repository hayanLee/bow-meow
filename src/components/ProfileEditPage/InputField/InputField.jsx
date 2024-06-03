function InputField({ className, ...props }) {
  const { defaultValue } = props;
  return <input className={className} defaultValue={defaultValue} />;
}
export default InputField;
