import { Col, Container, Row } from "react-bootstrap";
import Search from "../../components/search/Search";
import styles from "./FreeBoard.module.css"
import { LuPenLine } from "react-icons/lu";

const Pen = LuPenLine as React.FC<React.SVGProps<SVGSVGElement>>;

type FreeTopProps = {
    searchValue: string;
    onSearchChange:(term:string) => void;
}

const FreeTop = ({onSearchChange}: FreeTopProps) => {
    return(
        <>
        <Container fluid className={`mb-4 ${styles.freeTop}`}>
            <Row className="d-flex">
                <Col xs={6} md={8} className="d-flex align-items-center gap-4 px-0">
                
                <button className="secondary-btn">
                    <span className="secondary btn-custom">작성하기</span>
                    <Pen className="secondary-stroke"/>
                </button>

                </Col>

                <Col xs={6} md={4} className="px-0">
                    <Search
                    choice={["search"]}
                    color="secondary"
                    onSearchChange={onSearchChange}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FreeTop;