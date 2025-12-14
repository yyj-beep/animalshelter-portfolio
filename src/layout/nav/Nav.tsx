import { useState } from 'react';
import {Button, Nav} from 'react-bootstrap';
import styles from './Nav.module.css';
import Popup from '../../components/popup/FindAnimal';

import { IoPaw, IoDocumentSharp, IoChevronUp } from "react-icons/io5";
import { PiWarningFill } from "react-icons/pi";

const NavBar = () => {

    const [modalShow, setModalShow] = useState(false);

    const Paw = IoPaw as React.FC<React.SVGProps<SVGSVGElement>>;
    const Document = IoDocumentSharp as React.FC<React.SVGProps<SVGSVGElement>>;
    const Warning = PiWarningFill as React.FC<React.SVGProps<SVGSVGElement>>;
    const ChevronUp = IoChevronUp as React.FC<React.SVGProps<SVGSVGElement>>;
    
    return(
        <>
        <Nav className={`tab flex-column align-items-center justify-content-end ${styles.navSide}`}>
            <div className={`flex-column align-items-center ${styles.navContent}`}>

                <Nav.Link
                className={`d-flex flex-column align-items-center ${styles.content}`}
                onClick={() => setModalShow(true)}
                >
                <Paw
                    aria-hidden="true"
                    className={`secondary ${styles.icon}`}
                />
                <span className={styles.text}>실종동물 찾는 법</span>
                </Nav.Link>

                <Popup show={modalShow} onClose={() => setModalShow(false)}/>

                <Nav.Link className={`d-flex flex-column align-items-center ${styles.content}`}>
                <Document
                    aria-hidden="true"
                    className={`secondary ${styles.icon}`}
                />
                <span className={styles.text}>분양 시 유의사항</span>
                </Nav.Link>



                <Nav.Link className={`d-flex flex-column align-items-center ${styles.content}`}>
                <Warning
                    aria-hidden="true"
                    className={`secondary ${styles.icon}`}
                />
                <span className={styles.text}>공지사항</span>
                </Nav.Link>

            </div>
            <Button
                className={`secondary-bg ${styles.topBtn}`}
                onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
                >
                <ChevronUp className={styles.topIcon}/>
            </Button>
        </Nav>
        </>
    )
};

export default NavBar;