  import React, { useState }from 'react';
  import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
  import ModalLayout from './ModalLayout';

  import '../../styles/_searchModal.scss';
  import Comment from '../Comment';
  import { SearchDataType } from '../../data/searchData';

  //알림 모달창
  //import AlertModal from '../utils/AlertModal';
  // 좋아요, 댓글, 공유 아이콘 (Material Design)
  //import { MdStarOutline, MdChatBubbleOutline, MdOutlineShare } from 'react-icons/md'; 
  // 페이지네이션 아이콘 (Ionicons v5)
  //import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

  //icon
  import 'bootstrap-icons/font/bootstrap-icons.css';
  //댓글 이미지 렌더링

  import sns2 from '../../assets/img/commentsection/snsface.png';



  interface SearchProps {
    show: boolean;
    onClose: () => void;
    data: SearchDataType;
  }

  const Search: React.FC<SearchProps> = ({ show, onClose, data }) => {

    return (
    
      <ModalLayout 
        show={show} 
        onClose={onClose} 
        title={data.title}
        date={data.date}
      >{/*ModalLayout*/}
       
{/* 정보 섹션 */}
          <div className="info-wrap mb-4 ">
            <div className="main-image-wrapper mb-3">
              <img src={data.image} alt="실종동물 이미지" className=" rounded-4 custom-img" />
            </div>
            
            <div className="info-box ms-5">
              <div className="info-title">
                <h4>{data.name}</h4>
                <span className="recruit secondary-bg tab ms-2">종료</span>
              </div>
              <div className="info-item ">
                <h6>{data.gender} | {data.age} | {data.weight}kg</h6>
              </div>
              <div className='info-row mt-4 mb-2 '>
                <span className="text-light label">품종</span>
                <span className='primary-dark s-ml1'> {data.breed}</span>
              </div>
              <div className='info-row mb-2'>
                <span className="text-light label">분실 장소</span>
                <span className='primary-dark s-ml2'> {data.location}</span>
              </div>
              <div className='info-row mb-2'>
                <span className="text-light label">분실 날짜</span>
                <span className='primary-dark s-ml2'> {data.lostPeriod}</span>
              </div>
              <div className="info-row">
                <span className="text-light label">긴급 연락처</span>
                <span className='primary-dark s-ml3'> {data.facilityContact}</span>
              </div>
            </div>
          </div>

{/* 봉사 내용 상세 설명 */}
          <div className='detail-wrap'>
            <div className='detail-btn '>특이사항</div>
              <div className="detail-content ">
                <p className="content-title ms-1" style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
                <p className="content-text ms-1" style={{ whiteSpace: 'pre-line' }}>{data.specialNotes}</p>
              </div>
          </div>
          <div className='finderFee-wrap mt-5 mb-5'>
            <div className='finderFee'>사례금</div>
            <span className='ms-4 mt-1'>{data.finderFee}</span>
          </div>

{/* 작성자 및 좋아요/댓글/공유 섹션 */}
          <div className="author-interaction-section d-flex justify-content-between align-items-center py-3">
            <div className="author-info">
              <img src={data.snsimg}/> 
              <span className='ms-3'>{data.authorName}</span>
            </div>
            <div className="interaction-icons d-flex align-items-center">
              <div className="icon-group me-4">
                {/*<MdStarOutline size="20" className="me-1" >*/}
                <span><i className="bi bi-star">{data.likes}</i> </span>
              </div>
              <div className="icon-group me-4">
                {/*<MdChatBubbleOutline size="20" className="me-1" />*/}
                <span><i className='bi bi-chat'>{data.comments}</i></span>
              </div>
              <div className="icon-group me-4">
                {/*<MdOutlineShare size="20" className="me-1" />*/}
                <span>{data.shares}</span>
              </div>
            </div>
          </div>
          
{/* 댓글달기 */}
          <div className="commentsection-wrapper text-center mb-4">
            <Comment/>
          </div>

{/*리뷰*/}
          <div className='review ms-3'>
            <img src={sns2} /> Julia
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, qui nisi sequi enim provident quis est ex cum obcaecati? Esse!</p>
          </div>
                
        {/* 페이지네이션 푸터 */}
        {/*<Modal.Footer className="post-modal-footer d-flex justify-content-center align-items-center">
          <Button variant="link" className="pagination-arrow-btn me-2">
            <IoChevronBackOutline size="24" />
          </Button>
          <Button variant="link" className="pagination-arrow-btn ms-2">
            <IoChevronForwardOutline size="24" />
          </Button>
        </Modal.Footer>*/}
      
      </ModalLayout>
    );
  };

  export default Search;
