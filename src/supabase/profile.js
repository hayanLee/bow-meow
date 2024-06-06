import { getUser } from './auth.login';
import supabase from './supabaseClient';

export const getUserFunction = async () => {
  const authUser = await getUser();
  const { data: userInfo, error } = await supabase.from('users').select().eq('uuid', authUser.user.id);
  if (error) {
    console.log(error);
  } else {
    return userInfo[0].profile_img;
  }
};
