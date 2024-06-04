import InputField from '../InputField/InputField';
import { StInputField, StInputFields } from './InputFields.styled';

function InputFields(props) {
  const loginedUserNickname = '닉네임abc';
  const loginedUserPassword = 'mypassword';
  const loginedUserIntroduce = '잘 부탁드려요~';

  return (
    <StInputFields>
      <StInputField>
        <span>닉네임</span>
        <InputField defaultValue={loginedUserNickname} />
      </StInputField>
      <StInputField>
        <span>비밀번호</span>
        <InputField defaultValue={loginedUserPassword} />
      </StInputField>
      <StInputField>
        <span>한줄소개</span>
        <InputField defaultValue={loginedUserIntroduce} />
      </StInputField>
    </StInputFields>
  );
}
export default InputFields;
