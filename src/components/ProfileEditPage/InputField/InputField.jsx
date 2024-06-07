import StInputField from './InputField.styled';

function InputField(props) {
  const { defaultValue, onChange } = props;
  return <StInputField defaultValue={defaultValue} onChange={onChange} />;
}
export default InputField;
