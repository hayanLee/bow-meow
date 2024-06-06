import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo_img.png';
import { getUserToken } from '../../supabase/auth.login';
import Input from '../common/Input';
import {
  StContainer,
  StHeader,
  StLeft,
  StLogin,
  StLogo,
  StRight,
  StSearchIcon,
  StSearchWrapper,
  StTitle,
  ProfileImg
} from './Header.styled';
import supabase from '../../supabase/supabaseClient';

function Header() {
  const navigate = useNavigate();

  const homePageBtn = () => {
    navigate('/');
  };

  const accessToken = getUserToken();

  const [userImg, setUserImg] = useState(null);

  const getUserFunction = async() => {
    const {data} = await supabase.auth.getUser()

    const {data:userInfo,error} = await supabase.from('users').select().eq('uuid',data.user.id)
    if(error){
      console.log(error)
    }else{
      setUserImg(userInfo[0].profile_img)
    }
  }

  useEffect(()=>{
    getUserFunction();
  },[])

  return (
    <StHeader>
      <StContainer>
        <StLeft>
          <StLogo src={logoImg} alt="logo" onClick={homePageBtn} />
          <StTitle onClick={homePageBtn}>멍멍냥냥</StTitle>
        </StLeft>
        <StRight>
          <StSearchWrapper>
            <Input />
            <StSearchIcon />
          </StSearchWrapper>
          {accessToken ? (
              <ProfileImg  onClick={() => {
                navigate('/myPage');
              }} src={userImg} />
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
