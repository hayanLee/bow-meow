import { forwardRef, useImperativeHandle } from 'react';

import InputField from '../InputField/InputField';
import { StLabelInputPair, StInputFields } from './ProfileInfoInputfields.styled';

import useInput from '../../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../../redux/slices/userReducer';

const ProfileInfoInputFields = forwardRef(({ loginedUser }, ref) => {
  const { nickname: defaultNickname, introduce: defaultIntroduce } = loginedUser;

  const [nickname, changeNickname] = useInput(defaultNickname);
  const [introduce, changeIntroduce] = useInput(defaultIntroduce);

  const dispatch = useDispatch();

  useImperativeHandle(
    ref,
    () => ({
      handleEditButtonClick
    }),
    [nickname, introduce]
  );

  function handleEditButtonClick() {
    //Step.1: 유효성 검사
    //Todo

    //Step 2: 새로운 유저 객체 만들기
    const editedUser = { ...loginedUser, nickname, introduce };

    //Step 3: 리듀서에게 보내기
    dispatch(updateUserProfile(editedUser));

    //확인메시지
    console.log('fn: handleEditButtonClick');
    console.log('editedUser ↓');
    console.dir(editedUser);
  }

  return (
    <StInputFields>
      <StLabelInputPair>
        <span>닉네임</span>
        <InputField defaultValue={defaultNickname} value={nickname} onChange={changeNickname} />
      </StLabelInputPair>
      <StLabelInputPair>
        <span>한줄소개</span>
        <InputField defaultValue={defaultIntroduce} value={introduce} onChange={changeIntroduce} />
      </StLabelInputPair>
    </StInputFields>
  );
});

export default ProfileInfoInputFields;
