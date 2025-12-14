import React, { useState } from 'react';
import Community from './CommunityModal';
import Post from './PostModal';
import Search from './SearchModal';
import { searchList, SearchDataType } from '../../data/searchData'; // searchList: SearchDataType[]
import { postList, PostDataType } from '../../data/postData';

const ModalTestComp = () => {
//커뮤니티,포스트 모달창 관련 변수 지정
  type ModalType = 'community' | 'post' | 'search' | null;
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  // Community 모달에서 특정 게시물을 로드할 때 사용할 ID 상태
  // 이 ID는 버튼을 클릭할 때 설정될 수 있습니다.
  const [communityPostId, setCommunityPostId] = useState<string | undefined>(undefined);

  //search 컴포넌트 관련 상태
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedName, setSelectedName] = useState<string | null>(null);
   

  // 사용자가 목록에서 항목을 클릭했을 때 실행
  const handleOpen = (name: string) => {
    setSelectedName(name);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedName(null);
  };

  // 선택된 이름에 해당하는 데이터 찾기
  const selectedSearchData = searchList.find((item:SearchDataType) => item.name === selectedName);
  //const selectedPostData = postList.find((item:PostDataType) => item.organizationName === selectedName);

  return (
    <>
      {/*커뮤티니,포스트 모달창 확인 버튼*/ }
      <button onClick={() => {
        setCommunityPostId('choco1'); //특정 Id를 넘겨주고 싶을때
        openModal('community')
        }
      }>모달 Community 열기</button>
        <Community show={activeModal === 'community'} onClose={closeModal} communityId={communityPostId} />

      <button onClick={() => openModal('post')}>모달 Post 열기</button>
        <Post show={activeModal === 'post'} onClose={closeModal} data={postList[0]} />
      
      {/*search.tsx 실종동물 게시판 리스트 예시 */}
      {searchList.map(item => (
        <div key={item.name} onClick={() => handleOpen(item.name)}>
          <h4>{item.title}</h4>
          <p>{item.date}</p>
        </div>
      ))}

      {/* search 컴포넌트 모달 띄우기 */}
      {selectedSearchData && (
        <Search
          show={modalOpen}
          onClose={handleClose}
          data={selectedSearchData}
        />
      )}
    </>
  );
};

export default ModalTestComp;


/*type ModalType = 'community' | 'post' | 'search' | null;

const ModalTestWrapper = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <button onClick={() => openModal('community')}>모달 Community 열기</button>
      <button onClick={() => openModal('post')}>모달 Post 열기</button>
      <button onClick={() => openModal('search')}>모달 Search 열기</button>

      <Community show={activeModal === 'community'} onClose={closeModal} />
      <Post show={activeModal === 'post'} onClose={closeModal} />
      <Search show={activeModal === 'search'} onClose={closeModal} />
    </>
  );
};

export default ModalTestWrapper;*/
