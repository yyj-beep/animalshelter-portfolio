import React, { useRef } from 'react';
import MainPost from './details/MainPost';
import Stats from './details/Stats';
import MainTop from './details/MainTop';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Main.module.css';

//swiper 관련
import { Swiper, SwiperSlide } from 'swiper/react';
import type {Swiper as SwiperClass } from 'swiper';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
//slide comp
import SearchSlide from '../main/mainslide/SearchSlide';
import ReHomeSlide from '../main/mainslide/ReHomeSlide';

const Main: React.FC = () => {

    const swiperRef = useRef<SwiperCore | null>(null);

  const goToPrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNextSlide = () => {
    swiperRef.current?.slideNext();
  };


    return(
        <>
        <MainTop/>
        <Stats/>

        <Container className={`${styles.slideWrapper} py-C grid1500`}>
        <Row>
          <Col xs={12}>
            <div className='d-flex justify-content-between nav-small'>
              <button onClick={goToPrevSlide} className={styles.slideBtn}>&lt; 주인을 찾습니다</button>
              <button onClick={goToNextSlide} className={styles.slideBtn}>유기동물 분양해요 &gt;</button>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={false}
              spaceBetween={20}
              slidesPerView={1}
              style={{ paddingTop: '20px' }}
              onSwiper={(swiper : SwiperClass) => {
                swiperRef.current = swiper;
              }}
              >
              <SwiperSlide>
                <div><SearchSlide /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div><ReHomeSlide /></div>
              </SwiperSlide>

              {/* <SwiperSlide>다른 갤러리 or 내용</SwiperSlide> */}
            </Swiper>
          </Col>
        </Row>
        </Container>
        
        <MainPost/>
        </>
    )
};

export default Main;