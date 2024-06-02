import styled from 'styled-components';

//이슈: ProfileEditPage에서 나온 컴포넌트들을
// components 폴더에 ProfileEditPage 하위폴더를 만들어서 거기에 넣어야 할지
// 아니면 그냥 components 폴더에 모두 넣어야 할지 몰라서
// 우선 이 파일에 두었습니다. 이후 결정에 따라 적절한 곳으로 옮기겠습니다.

//Todo: 디자인 관련 결정 이후 팀 결정에 맞춰 수정
//  padding, gap 크기
//  너비, 높이
//  반응형 관련 값 (브레이크 포인트)

const baseGap = 10;
const basePadding = 10;

const Main = styled.main`
  height: 80vh;
  min-width: 1200px;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0px;
  padding: ${basePadding}px;

  background-color: var(--bg-color); //배포 시 이 컬러를 사용
  background-color: green; //영역 구분용 컬러

  color: var(--text-color);
`;

const UpperSection = styled.section`
  height: 50%;
  aspect-ratio: 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0px;
  padding: ${basePadding * 2}px;

  background-color: palegreen; //영역 구분용 컬러

  //프로필 사진 영역
  & > div {
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${basePadding}px;

    border-radius: 100%;

    background-color: skyblue; //영역 구분용 컬러
  }
`;

const LowerSection = styled.section`
  height: 50%;
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: palevioletred; //영역 구분용 컬러
`;

const ProfileEditInputField = styled.div`
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${baseGap}px;
  padding: ${basePadding}px;

  background-color: var(--box-color);
`;

const ButtonGroup = styled.div`
  background-color: indianred;

  margin-left: auto;
`;

//공용컴포넌트 Button이 아직 없어서
//임시로 만들어 썼습니다
const Button = styled.button`
  background-color: var(--point-color);
  color: var(--text-color);

  border-radius: 30px;
`;

const InputField = styled.input`
  width: 66%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--text-color);
  color: black;
`;

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
