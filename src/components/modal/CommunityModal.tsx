import React, { useState , useEffect }from 'react';

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import AlertModal from '../../utils/AlertModal';
import '../../styles/_Community.scss';
//import {MdStarOutline} from 'react-icons/md';

//data 렌더링
import communityData from '../../data/communityData';
//이미지 렌더링
import sns from '../../assets/img/community/sns-profile.png';
//댓글 컴포넌트 렌더링
import Comment from '../Comment';

//데이터 타입 정의
interface CommunityDataType{
    id:string;
    title:string;
    date:string;
    image:string[];
    content:string;
    authorName:string;
}
interface CommunityProps {
  show: boolean;
  onClose: () => void;
  communityId?: string; //communityId prop 
}

const Community: React.FC<CommunityProps> = ({ show, onClose, communityId }) => {

  //알림 모달창
  const [showAlert, setShowAlert] = useState(false);

  //컴포넌트가 직접 관리할 게시물 상세 데이터 상태
  const [postData, setPostData] = useState<CommunityDataType | null>(null);

  useEffect(() => {
    if(show) { //모달이 열릴때만 데이터 로드
      if(communityId){
        const selectedPost = communityData.find(post => post.id === communityId);
        setPostData(selectedPost || null); //못 찾으면 null
      } else{ //id가 없으면 첫번째 게시물 로드(기본값) 또는 로드가 없다
        setPostData(communityData[0] || null);
      } 
    } 
  },[show, communityId]);
    //데이터가 로딩중이거나 없는 경우 처리방식
    if(!postData){
      return show ?(
        <Modal show={show} onHide={onClose} centered dialogClassName='modal-style'>
          <Modal.Body>데이터를 불러오는 중이거나 찾을 수 없습니다</Modal.Body>
        </Modal>
        ) : null;
    }
   
  return (
    <>
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
    <Modal 
    show={show} 
    onHide={onClose} 
    centered 
    scrollable
    dialogClassName="modal-style"
    >
      <Modal.Header  >
        <div className='ms-4 mt-3'>
          <Modal.Title >{postData.title}</Modal.Title>
          <p className='date'>{postData.date}</p>
        </div>
          <Button  
            variant='outline'
            className='primary-btn btn-radius  me-5'
            onClick={()=> setShowAlert(true)}>
            <h6>수정</h6>
          </Button>
      </Modal.Header>
      <div className='line'></div>
      <Modal.Body>
        <div className='tag ms-4'>
          <span className='secondary-btn tag-style tab'>#강아지</span>
          <span className='secondary-btn tag-style tab'>#자랑</span>
          <span className='secondary-btn tag-style tab'>#초코</span>
        </div>
        
        <div className='ms-4'>
          <span  style={{ whiteSpace: 'pre-line' }}>{postData.content}</span><br/>
        </div>
        
        <div className='img-wrap'>
        {postData.image.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt={`image-${idx + 1}`}
          className="img rounded mb-3"
          
        />
        ))}
        </div>

{/* 리뷰 영역*/}
        <div className="commentprofile-wrapper mt-5 mb-4">
          <img src={sns} className='sns-img' alt="프로필 이미지"/>
            <h6 className='sns-name'>{postData.authorName}</h6>
          <div className='icons-box me-3'>
            <div className='star-img'>16</div>
            <div className='heart-img'>16</div>
            <div className='share-img'>16</div>
          </div>
        </div>
{/* 댓글 입력창 */}
        <div className='commentbody'><Comment/></div>
           
      </Modal.Body>
     
{/* 페이지네이션 푸터 */}
      <Modal.Footer className="post-modal-footer d-flex justify-content-center align-items-center">
        <Button variant="link" className="pagination-arrow-btn me-2">
          {/*<IoChevronBackOutline size="24" />*/}
        </Button>
        <Button variant="link" className="pagination-arrow-btn ms-2">
          {/*<IoChevronForwardOutline size="24" />*/}
        </Button>
      </Modal.Footer>
            
    </Modal>

{/* 수정버튼 알림 모달창 */}
            <AlertModal show={showAlert} onClose={() => setShowAlert(false)}/>
          </Col>
        </Row>
    </Container>
    </>
  );
};

export default Community;
