//자원봉사자 컴포넌트 모달
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalLayout from './ModalLayout'; // 공통 모달
import 'bootstrap-icons/font/bootstrap-icons.css';
import volunteer from '../../assets/img/post/volunteer.jpg';
import sns from '../../assets/img/community/sns-profile.png';
import Comment from '../Comment';
//data 불러오기
import postData, { PostDataType } from '../../data/postData';

import '../../styles/_postModal.scss';

interface PostProps {
  show: boolean;
  onClose: () => void;
  data: PostDataType;
}

const Post: React.FC<PostProps> = ({ show, onClose, data }) => {
  
  return (
  <ModalLayout
    show={show}
    onClose={onClose}
    title={data.title}
    date={data.date}
    footer={
      <>
        <Button variant="link" className="pagination-arrow-btn me-2">
          {/*<IoChevronBackOutline size={24} />*/}
        </Button>
        <Button variant="link" className="pagination-arrow-btn ms-2">
          {/*<IoChevronForwardOutline size={24} />*/}
        </Button>
      </>
    }
  >
    {/* 이 아래가 children으로 전달됨 */}
    <div className="info-wrap mb-4">
      <div className="main-image-wrapper mb-3">
        <img src={data.image} alt="봉사 활동 이미지" className="img-fluid rounded-4" />
      </div>
      
      <div className="info-box">
        <div className="info-title">
          <h4>{data.organizationName}</h4>
          <span className="recruit secondary-bg tab ms-2">모집중</span>
        </div>
        <div className="info-item-url">
          <a href={data.organizationUrl} target="_blank" rel="noopener noreferrer">
            {data.organizationUrl}
          </a>
        </div>

          <div className='info-row mt-4 mb-2 '>
              <span className="text-light label">담당자</span>
              <span className='primary-dark p-ml1'>{data.contactPerson}</span>
            </div>
            <div className='info-row mb-2'>
              <span className="text-light label">활동 장소</span>
              <span className='primary-dark p-ml2'>{data.activityLocation}</span>
            </div>
            <div className='info-row mb-2'>
              <span className="text-light label">모집 기간</span>
              <span className='primary-dark p-ml2'>{data.recruitmentPeriod}</span>
            </div>
            <div className='info-row mb-2'>
              <span className="text-light label">봉사 기간</span>
              <span className='primary-dark p-ml2'>{data.volunteerPeriod}</span>
            </div>
            <div className="info-row">
              <span className="text-light label">시설 연락처</span>
              <span className='primary-dark p-ml3'> {data.facilityContact}</span>
            </div>
          </div>
        </div>
        
    <div className="detail-wrap ">
      <div className="detail-btn">상세</div>
      <div className="detail-content mb-4">
        <h5 className="content-title">봉사 내용과 관련된 상세 설명이 추가됩니다.</h5>
        <p className="content-text" style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
      </div>
    </div>

    <div className="author-interaction-section d-flex justify-content-between align-items-center py-3 mt-5">
      <div className="author-info d-flex align-items-center">
        <img src={sns} alt="프로필" className="profile-img rounded-circle me-2" />
        <h6>{data.authorName}</h6>
      </div>
      
      <div className="interaction-icons d-flex align-items-center">
        <div className="icon-group bi bi-star me-4"><span>{data.likes}</span></div>
        <div className="icon-group bi bi-chat me-4"><span>{data.comments}</span></div>
        <div className="icon-group me-4"><span>{data.shares}</span></div>
      </div>
    </div>

    <Comment/> {/* 댓글 쓰기 창 */}

    <div className="line-width mb-5 mt-3"></div>

    <div className="warning-notes mb-4 ms-4 me-3">
      {data.warnings.map((warning: string, index: number) => (
        <p key={index} className="warning-text mb-1">※ {warning}</p>
      ))}
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