import { Col, Container, Row } from "react-bootstrap";
import Search from "../../components/search/Search";
import styles from "./Category.module.css"
import { LuPenLine } from "react-icons/lu";

const Pen = LuPenLine as React.FC<React.SVGProps<SVGSVGElement>>;

type PostTopProps = {
    searchValue: string;
    onSearchChange:(term:string) => void;
}

const FreeTop = ({onSearchChange}: PostTopProps) => {
    return(
        <>
        <Container fluid className={`mb-4 ${styles.postTop}`}>
            <Row className="d-flex">
                <Col xs={6} md={4} className="px-0">
                    <Search
                    choice={["location", "keyword"]}
                    color="blend"
                    onSearchChange={onSearchChange}/>
                </Col>

                <Col className="d-flex align-items-center gap-4 px-0 justify-content-end">
                                
                <button className="blend-btn">
                    <span className="blend btn-custom">공고 등록하기</span>
                    <Pen className="blend-stroke"/>
                </button>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FreeTop;