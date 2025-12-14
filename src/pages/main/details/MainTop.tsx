import { Col, Container, Row } from "react-bootstrap";
import Search from "../../../components/search/Search";
import styles from '../Main.module.css';

const MainTop = () => {
    return(
    <>
    <Container fluid className={`bg-color ${styles.top}`}>

        <Row className="grid1500">
            
            <Col sm={12} md={6} className={`content-grid d-flex flex-column justify-content-center gap-5 ${styles.txtWarp}`}>
                <div className="d-flex flex-column gap-3">
                    <div className={styles.txtImg}/>
                    <h1>실종과 보호 정보를<br/>간편하게 확인하세요.</h1>
                    <p className="text-dark">빠르게 찾고싶은 정보를 실시간으로 확인할 수 있습니다.<br/>필요한 정보를 빠르게 찾아보세요.</p>
                </div>
                <Search choice={["location", "type"]} color="primary"/>
            </Col>

            <Col sm={12} md={6} className={`d-flex align-items-center ${styles.topImg}`}>
            <div className={styles.img}/>
            </Col>

        </Row>
    </Container>
    </>
    )
};

export default MainTop;