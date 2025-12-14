// src/components/AlertModal.tsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface AlertModalProps {
  show: boolean;
  onClose: () => void;
  message?: string;
}

const AlertModal: React.FC<AlertModalProps> = ({ show, onClose, message = '현재 준비중입니다.' }) => {
  return (
    <Modal show={show} onHide={onClose} >
      <Modal.Header closeButton>
        <Modal.Title>알림</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
