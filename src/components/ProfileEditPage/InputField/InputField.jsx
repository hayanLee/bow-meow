import StInputField from './InputField.styled';

function InputField(props) {
  const { defaultValue } = props;
  return <StInputField defaultValue={defaultValue} />;
}
export default InputField;
