import {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import MenusData from "../../data/menu.json";
import styles from './Header.module.css';
import iconMap from "../../utils/iconMap";

import { LuLock, LuUser } from "react-icons/lu";

const Lock = LuLock as React.FC<React.SVGProps<SVGSVGElement>>;
const User = LuUser as React.FC<React.SVGProps<SVGSVGElement>>;

type MenuItem = {
  title:string;
  to:string;
  icon:keyof typeof iconMap;
};

type MenuGroup = {
  menuId:string;
  label:string;
  menus:MenuItem[];
}



const HeaderWeb = () => {

  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [hovered, SetHovered] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenu = (menuId:string) => {
    setActiveMenuId(prev => (prev === menuId ? null : menuId));
  }

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if(dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.nav-default')
      ){setActiveMenuId(null);}
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const activeMenuGroup = (MenusData as MenuGroup[]).find(
    group => group.menuId === activeMenuId
  )


  return(
    <>
    <Navbar className={styles.header} fixed="top">
    <Container fluid>
      <Navbar.Brand href="/" className={styles.logo}></Navbar.Brand>
      <Nav className={`gap-4 ${styles.headerLeft}`}>

        {(MenusData as MenuGroup[]).map(menuGroup => (
        <Nav.Link
          key={menuGroup.menuId}
          className={`nav-default ${styles.label}`}
          onClick={() => handleMenu(menuGroup.menuId)}
          >{menuGroup.label}
          </Nav.Link>
        ))}


        {activeMenuId && (
        <div
          ref={dropdownRef}
          className={
            `d-flex flex-column nav-small
            ${styles.panel}
            ${styles[`arrow_${activeMenuId}`]}
          `}>

          {activeMenuGroup?.menus.map(menuItem => {
            const isHovered = hovered === menuItem.title;
            const IconDefault = iconMap[menuItem.icon].default as React.ElementType;
            const IconHover = iconMap[menuItem.icon].hover as React.ElementType;
            return(                  
            <Link
              key={menuItem.title}
              to={menuItem.to}
              className={`d-flex align-items-center gap-3 ${styles.hLink}`}
              onMouseEnter={()=> SetHovered(menuItem.title)}
              onMouseLeave={()=> SetHovered(null)}
              ><div className={styles.iconWrap}>
                <IconDefault className={`${styles.iconLeft} ${!isHovered ? styles.visible : styles.hidden}`}/>
                <IconHover className={`${styles.iconLeft} ${isHovered ? styles.visible : styles.hidden}`}/>
              </div>
              {menuItem.title}
            </Link>
            )
          })}
          </div>
        )}

      </Nav>



      <Nav className={`ms-auto nav-small gap-2 ${styles.login}`}>

        <Nav.Link href="#" className='d-flex align-items-center gap-2'>
        <Lock className={styles.iconRight}/>로그인
        </Nav.Link>

        <Nav.Link href="#" className='d-flex align-items-center gap-2'>
        <User className={styles.iconRight}/>회원가입
        </Nav.Link>

        <Nav.Link href="#">마이페이지</Nav.Link>
      </Nav>
    </Container>

    </Navbar>
    </>
  )
}

export default HeaderWeb;