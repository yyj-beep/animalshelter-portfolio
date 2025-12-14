//실종동물을 찾습니다, 유기동물 분양해요 모달 main layout
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/_modalLayout.scss';



interface ModalLayoutProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  date?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

function ModalLayout ({ show, onClose, title, date, children, footer }:ModalLayoutProps) {
  return (

    <Modal show={show} onHide={onClose} centered scrollable dialogClassName="modal-style">
      {title && (
        <Modal.Header className="d-flex flex-column align-items-start mt-3 ms-5 " >
          <Modal.Title><h2>{title}</h2></Modal.Title>
          {date && <p className="tab mt-2 mb-2">{date}</p>} 
        </Modal.Header>
      )}
      <div className="line"></div>

      <Modal.Body className="modal-body px-4 pt-4 pb-0 ms-4">
        {children} {/*각각 모달창 컴포넌트 렌더링*/}
      </Modal.Body>
 
      <div className="line mt-4"></div>

      {footer && (
        <Modal.Footer className="post-modal-footer d-flex justify-content-center align-items-center">
          {footer}
        </Modal.Footer>
      )}
      <div className="line mt-4"></div>
    </Modal>
         
  );
};

export default ModalLayout;
