import InputField from '../InputField/InputField';
import { StInputField, StInputFields } from './ProfileInfoEdit.styled';

function ProfileInfoEdit({ loginedUser }) {
  const { nickname, introduce, pwd } = loginedUser;

  return (
    <StInputFields>
      <StInputField>
        <span>닉네임</span>
        <InputField defaultValue={nickname} />
      </StInputField>
      <StInputField>
        <span>비밀번호</span>
        <InputField defaultValue={pwd} />
      </StInputField>
      <StInputField>
        <span>한줄소개</span>
        <InputField defaultValue={introduce} />
      </StInputField>
    </StInputFields>
  );
}
export default ProfileInfoEdit;
