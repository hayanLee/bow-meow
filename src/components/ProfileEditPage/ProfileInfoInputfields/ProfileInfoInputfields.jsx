//subcomponent
import InputField from '../InputField/InputField';
import { StInputFields, StLabelInputPair } from './ProfileInfoInputfields.styled';

//react library
import { forwardRef, useImperativeHandle } from 'react';

//custom hook
import useInput from '../../../hooks/useInput';
import { updateUserProfile, uploadUserProfileImg } from '../../../supabase/profile';

const ProfileInfoInputFields = forwardRef(function ProfileInfoInputFields({ loginedUser }, ref) {
  const { nickname: defaultNickname, introduce: defaultIntroduce } = loginedUser;

  const [nickname, changeNickname] = useInput(defaultNickname);
  const [introduce, changeIntroduce] = useInput(defaultIntroduce);

  useImperativeHandle(
    ref.infoInputRef,
    () => ({
      handleEditButtonClick
    }),
    [nickname, introduce]
  );

  async function handleEditButtonClick() {
    const profileFile = ref.current?.uploadedImgURLRef.current ?? null;

    let profileImgUrl = loginedUser.profileImg;
    if (profileFile) {
      profileImgUrl = await uploadUserProfileImg(profileFile);
      if (!profileImgUrl) {
        alert('이미지 업로드에 실패했습니다');
        return;
      }
    }

    const editedUser = { nickname, introduce, profileImg: profileImgUrl };

    const updatedUser = await updateUserProfile(editedUser);
    if (updatedUser) {
      alert('수정 완료');
    } else {
      alert('프로필 업데이트에 실패했습니다');
    }
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
