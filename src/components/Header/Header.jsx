import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo_img.png';
import { updateUserProfile } from '../../redux/slices/userReducer';
import { getUserRow } from '../../supabase/profile';
import Input from '../common/Input';
import {
  ProfileImg,
  StContainer,
  StHeader,
  StLeft,
  StLogin,
  StLogo,
  StRight,
  StSearchIcon,
  StSearchWrapper,
  StTitle
} from './Header.styled';
import supabase from '../../supabase/supabaseClient';

function Header() {
  const [userImg, setUserImg] = useState(null);
  const filteringImgRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const homePageBtn = () => {
    navigate('/');
  };
  useEffect(() => {
    (async () => {
      const profileImg = await getUserRow();
      const { uuid: userId, nickname, profile_img } = profileImg;

      setUserImg(profile_img);
      dispatch(updateUserProfile({ isLogin: true, userId, nickname, profileImg: profile_img }));
    })();
  }, [userImg]);

  const filterImg = async () => {
    const { data, error } = await supabase.from('posts').select().eq('title', filteringImgRef.current.value);
    setItemTest(data);
    return data;
  };

  const isLogin = useSelector((state) => state.user.isLogin);
  console.log('로그인 리듀서', isLogin);

  return (
    <StHeader>
      <StContainer>
        <StLeft>
          <StLogo src={logoImg} alt="logo" onClick={homePageBtn} />
          <StTitle onClick={homePageBtn}>멍멍냥냥</StTitle>
        </StLeft>
        <StRight>
          <StSearchWrapper>
            <Input inputRef={filteringImgRef} />
            <StSearchIcon onClick={filterImg} />
          </StSearchWrapper>
          {isLogin ? (
            <ProfileImg
              onClick={() => {
                navigate('/myPage');
              }}
              src={userImg}
            />
          ) : (
            <StLogin
              onClick={() => {
                navigate('/auth/login');
              }}
            >
              로그인
            </StLogin>
          )}
        </StRight>
      </StContainer>
    </StHeader>
  );
}

export default Header;
