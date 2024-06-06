import { forwardRef, useRef } from 'react';
import { StDiv, StImg, StInput, StLabel, StSpan } from './ProfileImageEdit.styled';

const ProfileImageEdit = forwardRef(function ProfileImageEdit({ loginedUser }, ref) {
  const { profileImg } = loginedUser;
  const imageElemRef = useRef(null);

  function handleFileChange(e) {
    if (e.target.files.length === 0) {
      return;
    }

    const imageURL = URL.createObjectURL(e.target.files[0]);
    imageElemRef.current.src = imageURL;
    ref.current = imageURL;
  }

  return (
    <StDiv>
      <StInput
        id="profileeditpage-image-input"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />

      <StLabel htmlFor="profileeditpage-image-input">
        <StImg src={profileImg} ref={imageElemRef} />
        <StSpan>프로필 수정</StSpan>
      </StLabel>
    </StDiv>
  );
});

export default ProfileImageEdit;
