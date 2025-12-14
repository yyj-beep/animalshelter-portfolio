import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalLayout from './ModalLayout'; // 공통 모달
import 'bootstrap-icons/font/bootstrap-icons.css'; //icons
import  '../../styles/_reHomeModal.scss';

import sns from '../../assets/img/community/sns-profile.png';

//data 불러오기
import { ReHomeDataType } from '../../data/reHomeData';

//댓글 입력창 불러오기
import Comment from '../Comment';

interface ReHomeProps {
  show: boolean;
  onClose: () => void;
  data: ReHomeDataType;
}

const Post: React.FC<ReHomeProps> = ({ show, onClose, data }) => {
  
  return (
  <ModalLayout
    show={show}
    onClose={onClose}
    title={data.title}
    date={data.date}
  >
    {/* 이 아래가 children으로 전달됨 */}
    <div className="info-wrap mb-4">
      <div className="main-image-wrapper mb-3">
        <img src={data.image} alt="봉사 활동 이미지" className="img-fluid rounded-4" />
      </div>
      
      <div className="info-box">
        <div className="info-title">
          <h4>{data.name}</h4>
          <span className="recruit secondary-bg tab ms-2">입양완료</span>
        </div>
        <div className="info-item">
          <h6>{data.gender} | {data.age} | {data.weight}kg</h6>
        </div>
        <div className='info-row mt-3 mb-2'>
          <div className="text-light ">분양 동물
            <span className='primary-dark r-ml1'> {data.breed}</span></div>
        </div>
        <div className='info-row mb-2'>
          <div className="text-light ">분양 지역
            <span className='primary-dark r-ml1'> {data.location}</span></div>
        </div>
        <div className='info-row mb-2'>
          <div className="text-light">책임비
            <span className='primary-dark r-ml2'> {data.fee}만원</span></div>
        </div>
        <div className='info-row mb-2'>
          <div className="text-light mb-2">연락처
            <span className='primary-dark r-ml2'> {data.facilityContact}</span></div>
        </div>
      </div>
    </div>

    <div className="detail-wrap mb-5 ">
      <div className="detail-btn ms-5 ">기타 정보</div>
      <div className="detail-content mb-4">
        <p className="content-text" style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
      </div>
    </div>

{/* 작성자 및 좋아요/댓글/공유 섹션 */}
    <div className="author-interaction-section d-flex justify-content-between align-items-center py-3">
            <div className="author-info">
              <img src={data.snsimg}/> 
              <span className='ms-2'>{data.authorName}</span>
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
    
    <Comment />

    <div className='dotLine'></div>

    <div className="warning-notes-wrap mb-5 ">
      <h6  className='mt-5 mb-3' style={{textAlign:'center'}}>
        아래 사항을 준수하고 반려동물을 안전하게 입양해요!</h6>
        <div className='warning-notes-box'>
          <p className='tab'>1.무료 분양 계약서를 작성하세요.</p>
          <p className='tab'>2.거래자의 신분을 반드시 공유하여 기억하거나 신분증 사본을 받으세요.</p>
          <p className='tab'>3.책임비가 5만 원을 초과하는 경우, 사이트 이용이 정지되며 게시글이 삭제됩니다.</p>
          <p className='tab'>4.5만 원 초과의 분양을 요구하는 게시글을 발견하면 꼭 신고해 주세요.</p>
          <p className='tab'>5.해당 글의 모든 정보(글, 이미지)의 무단전재 및 재배포를 금지합니다.</p>
        </div>
      
    </div>

    <div className="report-button-wrapper text-center mb-4">
      <Button variant="outline-danger" className="report-btn">
        신고하기 <span className="ms-1">&rsaquo;</span>
      </Button>
    </div>
  </ModalLayout>
  );
};

export default Post;