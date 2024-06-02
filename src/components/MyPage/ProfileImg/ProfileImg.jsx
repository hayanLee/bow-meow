function ProfileImg({ className, ...props }) {
  const { profileImg } = props;

  return (
    <div className={className}>
      <img src={profileImg} alt="프로필 사진" />
    </div>
  );
}

export default ProfileImg;
