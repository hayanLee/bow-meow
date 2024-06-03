import StInputField from './../InputField/InputField.styled';

function InputFields({ className, ...props }) {
  return (
    <div className={className}>
      <div>
        <label>(임시)닉네임</label>
        <StInputField defaultValue="닉네임123" />
      </div>
      <div>
        <label>(임시)비밀번호</label>
        <StInputField defaultValue="********" />
      </div>
      <div>
        <label>(임시)한줄소개</label>
        <StInputField defaultValue="잘 부탁드려요~" />
      </div>
    </div>
  );
}
export default InputFields;
