//동물을 찾습니다. 분양해요 컴포넌트 레이아웃
import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Search from "../components/search/Search";
import styles from '../styles/_galleryLayout.module.scss';

interface GalleryLayoutProps{
    children: React.ReactNode; //렌더링 될 실제 페이지 콘텐츠
    pageTitle? : string; //페이지별 제목등의 props
    pageBgImg? : string; //페이지별 헤드 이미지
    pageSubText?: string;
}

const GalleryLayout: React.FC <GalleryLayoutProps> = ({children, pageTitle,pageBgImg, pageSubText}) =>{
    
        const bgImg = pageBgImg 
    return (
        <div className={`${styles.wrapper}`}>
            <div className={styles.header} style={{ backgroundImage: `url(${bgImg})`}} >
                <Container>
                    <Col lg={12}>
                        <div className={styles.headtext}>
                            <h1>{pageTitle}</h1>
                            <h4>{pageSubText}</h4>
                        </div>
                    </Col>
                </Container>                       
            </div>
                <Container className={styles.body}>
                    <Row>
                        <Col lg={6} md={6} sm={9} className="searchbar mt-5">
                            <Search />
                        </Col>
                    </Row>
                    <Row >
                       
                        {children} {/* 여기가 각 컴포넌트의 고유한 콘텐츠가 렌더링될 공간입니다 */}
                        
                    </Row>
                </Container>
        </div>
    );  
};
export default GalleryLayout;