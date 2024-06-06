//subcomponent
import InputField from '../InputField/InputField';
import { StLabelInputPair, StInputFields } from './ProfileInfoInputfields.styled';

//react library
import { forwardRef, useImperativeHandle } from 'react';

//reducer
//import { useDispatch } from 'react-redux';
//import { updateUserProfile } from '../../../redux/slices/userReducer';

//custom hook
import useInput from '../../../hooks/useInput';

const ProfileInfoInputFields = forwardRef(({ loginedUser }, ref) => {
  const { nickname: defaultNickname, introduce: defaultIntroduce } = loginedUser;

  const [nickname, changeNickname] = useInput(defaultNickname);
  const [introduce, changeIntroduce] = useInput(defaultIntroduce);

  //const dispatch = useDispatch();

  useImperativeHandle(
    ref.infoInputRef,
    () => ({
      handleEditButtonClick
    }),
    [nickname, introduce]
  );

  function handleEditButtonClick() {
    //Step.1: 유효성 검사 (Todo)
    const profileImg = ref.uploadedImgRef.current ?? loginedUser.profileImg;

    //Step 2: 새로운 유저 객체 만들기
    const editedUser = { ...loginedUser, nickname, introduce, profileImg };

    //Todo: 변경된 사항이 있는지 체크하고 없으면 함수종료

    //Step 3: 리듀서에게 보내기
    //dispatch(updateUserProfile(editedUser));

    //Step 4: DB에 반영하기 (Todo)

    //Step 5: 완료메시지
    alert('수정 완료');

    //개발용 메시지
    //  console.log('handleEditButtonClick');
    //  console.log('editedUser ↓');
    //  console.dir(editedUser);
  }

  return (
    <StInputFields>
      <StLabelInputPair>
        <span>닉네임</span>
        <InputField defaultValue={defaultNickname || '미설정'} value={nickname} onChange={changeNickname} />
      </StLabelInputPair>
      <StLabelInputPair>
        <span>한줄소개</span>
        <InputField defaultValue={defaultIntroduce || '미구현'} value={introduce} onChange={changeIntroduce} />
      </StLabelInputPair>
    </StInputFields>
  );
});

export default ProfileInfoInputFields;
