import React, { useState } from 'react';
import Slide from '../../../layout/Slide'; // 위치 맞게 수정
import Search from '../../../components/modal/SearchModal'; // 모달 컴포넌트
import { searchList, SearchDataType } from '../../../data/searchData';

const SearchSlide: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<SearchDataType | null>(null);

  // 이미지 클릭 시 모달 열기 + 선택 데이터 설정
  const handleImageClick = (index: number) => {
    setSelectedData(searchList[index]);
    setShowModal(true);
  };

  // 모달 닫기
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Slide
        title="실종동물을 찾습니다"
        animalImages={searchList.slice(0, 6).map((item) => item.image)}
        onImageClick={handleImageClick}
        onRegisterClick={() => console.log('공고 등록 클릭')}
        onMoreClick={() => console.log('더보기 클릭')}
      />

      {selectedData && (
        <Search show={showModal} onClose={handleClose} data={selectedData} />
      )}
    </>
  );
};

export default SearchSlide;
