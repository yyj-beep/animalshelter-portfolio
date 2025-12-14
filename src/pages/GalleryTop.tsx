import { Col, Container, Row } from "react-bootstrap";
import Search from "../components/search/Search";
import styles from "./Gallery.module.scss";
import { LuPenLine } from "react-icons/lu";

const Pen = LuPenLine as React.FC<React.SVGProps<SVGSVGElement>>;

type FreeTopProps = {
    searchValue: string;
    onSearchChange:(term:string) => void;
}

const FreeTop = ({onSearchChange}: FreeTopProps) => {
    return(
        <>
        <Container fluid className={`mb-4 ${styles.galleryTop}`}>
            <Row className="d-flex">

                <Col xs={8} sm={8} md={4} className="px-0">
                    <Search
                    choice={["location", "type"]}
                    color="primary"
                    onSearchChange={onSearchChange}/>
                </Col>

                <Col xs={4} sm={4} md={8} className="d-flex align-items-center gap-4 px-0 justify-content-end">
                
                <button className="primary-btn">
                    <span className="primary btn-custom">공고 등록하기</span>
                    <Pen className="primary-stroke"/>
                </button>

                </Col>

            </Row>
        </Container>
        </>
    )
}

export default FreeTop;