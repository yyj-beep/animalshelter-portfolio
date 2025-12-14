import {useState, useEffect, useRef} from 'react';
import {Container, Nav, Navbar, Offcanvas, NavDropdown} from 'react-bootstrap';
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



const HeaderMobile = () => {

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
    <Navbar
      expand="false"
      className={styles.header}
      fixed="top">

      <Container fluid>
      <Navbar.Brand href="/" className={styles.logo}></Navbar.Brand>
        <Navbar.Toggle className={styles.menubar} aria-controls="category"/>

        <Navbar.Offcanvas
          id="category"
          aria-labelledby="mobile-category"
          placement="end">

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="mobile-category" className={styles.logo}></Offcanvas.Title>
          </Offcanvas.Header>



          <Offcanvas.Body className="d-flex flex-column justify-content-between">
            
            <Nav className="gap-4">

              {(MenusData as MenuGroup[]).map(menuGroup => (
                <NavDropdown
                  id={menuGroup.menuId}
                  key={menuGroup.menuId}
                  title={menuGroup.label}
                  className="nav-default"
                  >

                    {menuGroup.menus.map(menuItem => {
                      const isHovered = hovered === menuItem.title;
                      const IconDefault = iconMap[menuItem.icon].hover as React.ElementType;
                      return(
                        <NavDropdown.Item
                          key={menuItem.title}
                          href={menuItem.to}
                          className={`d-flex nav-small align-items-center gap-3 ${styles.dropItem}`}
                          ><IconDefault className={`${styles.iconLeft} ${!isHovered ? styles.visible : styles.hidden}`}/>
                          <div className={styles.menuTxt}>{menuItem.title}</div>
                        </NavDropdown.Item>
                      )
                     
                    })}
                  </NavDropdown>
              ))}
            </Nav>

            <Nav className={`flex-row justify-content-around nav-small gap-2 ${styles.login}`}>

              <Nav.Link href="#" className='d-flex align-items-center gap-2'>
                <Lock className={styles.iconRight}/>로그인
              </Nav.Link>

              <Nav.Link href="#" className='d-flex align-items-center gap-2'>
                <User className={styles.iconRight}/>회원가입
              </Nav.Link>

              <Nav.Link href="#">마이페이지</Nav.Link>
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      </Navbar>
    </>
  )
}

export default HeaderMobile;

