/*===== main page slide layout ====*/

import React from 'react';
import '../styles/_slide.scss';
import { LuPenLine } from "react-icons/lu";
import { GrNext } from "react-icons/gr";
import { IoPaw } from "react-icons/io5";
import { Col, Container, Row } from 'react-bootstrap';

const Pen = LuPenLine as React.FC<React.SVGProps<SVGSVGElement>>;
const Next = GrNext as React.FC<React.SVGProps<SVGSVGElement>>;
const Paw = IoPaw as React.FC<React.SVGProps<SVGSVGElement>>;

interface SlideProps {
  title: string;
  animalImages: string[];
  onRegisterClick?: () => void;
  onMoreClick?: () => void;
  onImageClick?: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({
  title,
  animalImages,
  onRegisterClick,
  onMoreClick,
  onImageClick,
}) => {
  
  return (
    <section className="animal-gallery content-grid pt-40">
      <Row className="d-flex align-items-end justify-content-md-between justify-content-center">
        <Col sm={12} md={6} className="d-flex justify-content-center justify-content-md-start pb-3">
        <h1 className="slide-title">{title} <Paw className='primary-fill'/></h1>
        </Col>
        <Col className="d-flex gap-2 justify-content-md-end justify-content-center pb-3">
          <button className="primary-btn" onClick={onRegisterClick}>
              <span className="primary btn-custom">공고 등록하기</span>
              <Pen className="primary-stroke"/>
          </button>
          <button className="primary-btn" onClick={onMoreClick}>
              <span className="primary btn-custom">더보기</span>
              <Next className="primary-stroke"/>
          </button>
        </Col>
      </Row>

      <div className="gallery-row gallery-row--1">
          {animalImages.slice(2, 6).map((img, index) => (
              <img
                key={index +2}
                src={img}
                alt={`animal-${index +2}`}
                className="img-style"
                onClick={() => onImageClick?.(index +2)}
                style={{ cursor: 'pointer' }}
              />
            ))}
      </div>

      <div className="gallery-row gallery-row--2">
        {animalImages.slice(2, 6).map((img, index) => (
          <img
            key={index + 2}
            src={img}
            alt={`animal-${index + 2}`}
            className="img-style"
            onClick={() => onImageClick?.(index + 2)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Slide;