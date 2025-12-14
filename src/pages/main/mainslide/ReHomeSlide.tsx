import React, { useState } from 'react';
import Slide from '../../../layout/Slide'; // 위치 맞게 수정
import ReHomeModal from '../../../components/modal/ReHomeModal'; // 모달 컴포넌트
import { reHomeList, ReHomeDataType } from '../../../data/reHomeData';

const SearchSlide: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<ReHomeDataType | null>(null);

  // 이미지 클릭 시 모달 열기 + 선택 데이터 설정
  const handleImageClick = (index: number) => {
    setSelectedData(reHomeList[index]);
    setShowModal(true);
  };

  // 모달 닫기
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Slide
        title="유기동물을 분양합니다"
        animalImages={reHomeList.slice(0, 6).map((item) => item.image)}
        onImageClick={handleImageClick}
        onRegisterClick={() => console.log('공고 등록 클릭')}
        onMoreClick={() => console.log('더보기 클릭')}
      />

      {selectedData && (
        <ReHomeModal show={showModal} onClose={handleClose} data={selectedData} />
      )}
    </>
  );
};

export default SearchSlide;
