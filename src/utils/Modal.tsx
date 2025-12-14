// src/components/Modal.tsx
import React, { ReactNode } from 'react';
import '../css/_Modal.scss'; // 모달 스타일 (아래 예시 참고)

interface ModalProps {
  isOpen: boolean;    // 모달을 열지 닫을지 결정
  onClose: () => void; // 모달 닫기 함수
  children: ReactNode; // 모달 내부에 표시될 내용
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // isOpen이 false면 아무것도 렌더링하지 않음
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children} {/* 여기에 동적으로 전달된 상세 내용이 렌더링됩니다. */}
        <button className="modal-close-button" onClick={onClose}>
          &times; {/* 닫기 아이콘 */}
        </button>
      </div>
    </div>
  );
};

export default Modal;