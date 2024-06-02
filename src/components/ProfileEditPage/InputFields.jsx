import StInputField from './ProfileEditPage.styles/InputField.styled';

function InputFields({ className, ...props }) {
  return (
    <div className={className}>
      <StInputField defaultValue="닉네임123" />
      <StInputField defaultValue="********" />
      <StInputField defaultValue="잘 부탁드려요~" />
    </div>
  );
}
export default InputFields;
