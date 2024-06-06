import { getUser } from './auth.login';
import supabase from './supabaseClient';

export const getUserRow = async () => {
  const authUser = await getUser();
  const { data: userInfo, error } = await supabase.from('users').select().eq('uuid', authUser.user.id);
  if (error) {
    console.log(error);
  } else {
    return userInfo[0];
  }
};

export const updateUserProfile = async (newUserInfo) => {
  const { uuid } = await getUserRow();

  console.log('>>>>>', newUserInfo);
  const { nickname, introduce, profileImg } = newUserInfo;

  const { data, error } = await supabase
    .from('users')
    .update({
      nickname,
      profile_img: profileImg,
      introduce
    })
    .eq('uuid', uuid)
    .select();

  if (error) {
    console.error('프로필 변경 에러:', error);
    return null;
  }

  console.log(data);
  return data;
};

export const uploadUserProfileImg = async (profileUrl) => {
  try {
    const { data, error } = await supabase.storage.from('profile').upload(`${crypto.randomUUID()}.png`, profileUrl);

    if (error) {
      console.log('프로필 스토리지 저장 실패', error);
      return null;
    }

    if (data) {
      const { publicUrl, error: urlError } = supabase.storage.from('profile').getPublicUrl(data.path);
      if (urlError) {
        console.log('Public URL 생성 실패', urlError);
        return null;
      }
      return publicUrl;
    }
  } catch (err) {
    console.log('업로드 중 오류 발생', err);
    return null;
  }
};
