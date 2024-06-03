import StInputFields from './InputFields.styled';
import InputField from '../InputField/InputField';

function InputFields(props) {
  return (
    <StInputFields>
      <div>
        <label>닉네임</label>
        <InputField defaultValue="닉네임123" />
      </div>
      <div>
        <label>비밀번호</label>
        <InputField defaultValue="********" />
      </div>
      <div>
        <label>한줄소개</label>
        <InputField defaultValue="잘 부탁드려요~" />
      </div>
    </StInputFields>
  );
}
export default InputFields;
