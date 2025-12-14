import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../Main.module.css';
import { IoPawOutline } from "react-icons/io5";
import { PiCompass } from "react-icons/pi";
import { RiSeedlingLine } from "react-icons/ri";

const Paw = IoPawOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const Compass = PiCompass as React.FC<React.SVGProps<SVGSVGElement>>;
const Seeding = RiSeedlingLine as React.FC<React.SVGProps<SVGSVGElement>>;

const Stats = () => {
    return(
        <>
        <Container fluid className={`py-A ${styles.stats}`}>
            <Row className="grid1500">
                <Col md={4} as="article" className="d-flex flex-column align-items-center">
                    <Paw className={styles.icon}/>

                    <div className="d-flex flex-column align-items-center gap-3">
                        <p className='display-1 primary'>20,659</p>
                        <h4 className='mt-3 text-dark'>실종동물 찾았습니다!</h4>
                    </div>
                </Col>

                <Col md={4} as="article" className="d-flex flex-column align-items-center">
                    <Compass className={styles.icon}/>

                    <div className="d-flex flex-column align-items-center gap-3">
                        <p className='display-1 primary'>18,730</p>
                        <h4 className="mt-3 text-dark">주인을 찾습니다!</h4>
                    </div>
                </Col>
 
                <Col md={4} as="article" className="d-flex flex-column align-items-center">
                    <Seeding className={styles.icon}/>
                    
                    <div className="d-flex flex-column align-items-center gap-3">
                        <p className='display-1 primary'>22,405</p>
                        <h4 className='mt-3 text-dark'>유기동물 분양했어요!</h4>   
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default Stats;