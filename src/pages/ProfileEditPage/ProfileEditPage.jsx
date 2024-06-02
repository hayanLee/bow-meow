import Main from './../../components/ProfileEditPage/ProfileEditPage.styles/Main.styled';
import UpperSection from './../../components/ProfileEditPage/ProfileEditPage.styles/UpperSection.styled';
import LowerSection from './../../components/ProfileEditPage/ProfileEditPage.styles/LowerSection.styled';
import ProfileEditInputField from './../../components/ProfileEditPage/ProfileEditPage.styles/ProfileEditInputField.styled';
import InputField from './../../components/ProfileEditPage/ProfileEditPage.styles/InputField.styled';
import ButtonGroup from './../../components/ProfileEditPage/ProfileEditPage.styles/ButtonGroup.styled';
import Button from './../../components/ProfileEditPage/ProfileEditPage.styles/Button.styled';

function ProfileEditPage() {
  return (
    <Main>
      <UpperSection>
        <div>
          <img src="..." alt=" " />
        </div>
        <Button>프로필 수정</Button>
      </UpperSection>
      <LowerSection>
        <ProfileEditInputField>
          <InputField defaultValue="닉네임123" />
          <InputField defaultValue="********" />
          <InputField defaultValue="잘 부탁드려요~" />
        </ProfileEditInputField>
        <ButtonGroup>
          <Button>뒤로가기</Button>
          <Button>수정하기</Button>
        </ButtonGroup>
      </LowerSection>
    </Main>
  );
}
export default ProfileEditPage;
