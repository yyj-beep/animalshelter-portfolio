import React from 'react';
import styles from './FindAnimal.module.css';
import { Modal } from 'react-bootstrap';

import { X } from 'react-bootstrap-icons';
import { HiArrowRight } from "react-icons/hi2";
import { PiCursorFill } from "react-icons/pi";
import {FiFileText,FiHome,FiCheckSquare} from 'react-icons/fi'



type FindProps = {
    show:boolean;
    onClose: () => void;
};

const Find: React.FC<FindProps> = ({show, onClose}) => {

    const ArrowRight = HiArrowRight as React.FC<React.SVGProps<SVGSVGElement>>;
    const Cursor = PiCursorFill as React.FC<React.SVGProps<SVGAElement>>;
    const Text = FiFileText as React.FC<React.SVGProps<SVGAElement>>;
    const Home = FiHome as React.FC<React.SVGProps<SVGAElement>>;
    const Check = FiCheckSquare as React.FC<React.SVGProps<SVGAElement>>;

    return(
        <>
        <Modal
            size="lg"
            centered
            show={show}
            onHide={onClose}
            backdrop={true}
            keyboard={true}
            aria-labelledby="modal-title"
            dialogClassName="modal-fullscreen-sm-down"
            className={styles.popup}>

            <Modal.Header className={`primary-light-bg text d-flex justify-content-between ${styles.top}`}> 
                <div
                    className="d-flex gap-1"
                    aria-hidden="true"
                    role="presentation">

                    <div className={styles.circle}/>
                    <div className={styles.circle}/>
                    <div className={styles.circle}/>
                </div>

                <X
                    aria-label="닫기"
                    onClick={onClose}
                    className={styles.topIcon}
                />
            </Modal.Header>

            <Modal.Body className={`d-flex flex-column align-items-center bg-color ${styles.content}`}>
                <h2 id="modal-title"
                    className={`d-flex mt-5 mb-4 text-center ${styles.title}`}>
                    <mark className="secondary-light-bg text">유기동물 찾는 방법</mark>
                    <Cursor className={styles.cursorIcon}/>
                </h2>

                <ul className="popup-grid d-flex flex-column gap-2 mb-5">
                    <li className={`d-flex align-items-center gap-4 ${styles.underline}`}>
                        <Text className={styles.lIcon} aria-hidden="true"/>
                        <p className={styles.txtSize}><span>실종동물 등록 및 빠른 전단지 작성</span></p>
                        <button className={`d-flex ${styles.rBtn}`} aria-label="실종동물 등록하러 가기">
                        <ArrowRight className={styles.rIcon} aria-hidden="true"/>
                        </button>
                    </li>

                    <li className={`d-flex align-items-center gap-4 ${styles.underline}`}>
                        <Check className={styles.lIcon} aria-hidden="true"/>
                        <p className={styles.txtSize}><span>보호중인 유기동물리스트 확인</span></p>
                        <button className={`d-flex ${styles.rBtn}`} aria-label="임시보호 유기동물 확인하러 가기">
                        <ArrowRight className={styles.rIcon} aria-hidden="true"/>
                        </button>
                    </li>

                    <li className={`d-flex align-items-center gap-4 ${styles.underline}`}>
                        <Home className={styles.lIcon} aria-hidden="true"/>
                        <p className={styles.txtSize}><span>실종지역 유기동물보호소 확인</span></p>
                        <button className={`d-flex ${styles.rBtn}`} aria-label="유기동물 보호소 확인하러 가기">
                        <ArrowRight className={styles.rIcon} aria-hidden="true"/>
                        </button>
                    </li>
                </ul>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default Find;