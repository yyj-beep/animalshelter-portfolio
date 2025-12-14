// src/hooks/useModal.ts
import { useState, ReactNode } from 'react'; // ReactNode는 JSX 요소를 타입으로 지정할 때 사용합니다.

interface UseModalResult {
  isModalOpen: boolean;          // 모달이 열려있는지 닫혀있는지 나타내는 불리언 값
  modalContent: ReactNode | null; // 모달 내부에 렌더링될 내용 (JSX, 텍스트 등)
  openModal: (content: ReactNode) => void; // 모달을 열고 내용을 설정하는 함수
  closeModal: () => void;        // 모달을 닫는 함수
}

const useModal = (): UseModalResult => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  // 특정 내용을 받아서 모달을 열고 해당 내용을 설정
  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // 모달을 닫고 내용을 초기화
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null); // 모달 닫을 때 내용 초기화 (선택 사항이지만 권장)
  };

  return {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
  };
};

export default useModal;