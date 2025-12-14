//유기동물 분양해요 컴포넌트

import React, {useState, useMemo} from "react";
import { Container,Row,Col } from "react-bootstrap";

//공용 디자인 레이아웃
import GalleryLayout from "./GalleryLayout";
//공용 카드 레이아웃
import GalleryDetail from "../components/gallery/GalleryDetail";
//모달창 
import ReHomeModal from "../components/modal/ReHomeModal";
//페이지 상단 title 배경 이미지
import bgImg from '../assets/img/search/rehomeheadbg.png';
//데이터 로딩
import { reHomeList, ReHomeDataType } from '../data/reHomeData'; 
//페이지네이션 관련
import styles from '../components/postpetstory/PostPetStory.module.scss';
import {IoPawOutline} from 'react-icons/io5';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md';
import TitleBanner from "../layout/banner/TitleBanner";
import GalleryTop from "./GalleryTop";
import Pagination from "../components/pagination/Pagination";


const SearchPost: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState("");
    //모달창 실행
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ReHomeDataType | null>(null);

    const handleCardClick = (item: ReHomeDataType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  //페이지네이션
  
      //한 페이지에 표시할 아이템 수
      const itemsPerPage = 12;
      //페이지네이션 상태
      const [currentPage, setCurrentPage] = useState(1);
      //현재 페이지에 따라 보여줄 데이터 계산
      const paginatedItems = useMemo(() => {
           const start = (currentPage - 1) * itemsPerPage;
              return reHomeList.slice(start, start + itemsPerPage);
              }, [currentPage]);
  
      // 전체 페이지 수
      const totalPages = Math.ceil(reHomeList.length / itemsPerPage);
      //타입 명시
      const ArrowLeft = MdOutlineKeyboardArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>;
      const DoubleArrowLeft = MdOutlineKeyboardDoubleArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>;
      const ArrowRight = MdOutlineKeyboardArrowRight as React.FC<React.SVGProps<SVGSVGElement>>;
      const DoubleArrowRight = MdOutlineKeyboardDoubleArrowRight as React.FC<React.SVGProps<SVGSVGElement>>;
      const PawIcon = IoPawOutline as React.FC<React.SVGProps<SVGSVGElement>>;

    return(
        <>
        <TitleBanner color="primary"/>
        <Container fluid className="grid1500 py-C px-4">
        <Row className="pb-40">
          <GalleryTop
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          />         
            {reHomeList.map(item => (
                <Col key={item.name} lg={3} md={4} sm={6} className="mb-4">
                    <div onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                        <GalleryDetail
                            image={item.image}
                            title={item.title}
                            location={item.location}
                            gender={item.gender}
                            age={item.age}
                            breed={item.breed}
                        />
                    </div>
                </Col>
              
            ))}
            
            {/* 모달 컴포넌트 렌더링 */}
                {isModalOpen && selectedItem && (
                    <ReHomeModal
                    show={isModalOpen}
                    onClose={handleCloseModal}
                    data={selectedItem}
                    />
                )}    
        </Row>
      {/* 📌 페이지네이션 영역 */}
        <Pagination
        totalItems={reHomeList.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={12}/>
        
        </Container>
        </>
    );
};

export default SearchPost;