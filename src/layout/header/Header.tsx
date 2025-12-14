import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';



const Header: React.FC = () => {

  const isMobile = useMediaQuery({maxWidth:992});
  return isMobile ? <HeaderMobile/> : <HeaderWeb/>
}

export default Header;