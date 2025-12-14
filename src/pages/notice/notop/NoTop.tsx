import { Col, Container, Row } from "react-bootstrap";
import Search from "../../../components/search/Search";
import styles from "../Notice.module.css"
import { IoPaw } from "react-icons/io5";

const Paw = IoPaw as React.FC<React.SVGProps<SVGSVGElement>>;

type NoTopProps = {
    totalCount: number;
    searchValue: string;
    onSearchChange:(term:string) => void;
}

const NoTop = ({totalCount, onSearchChange}: NoTopProps) => {
    return(
        <>
        <Container fluid className={`mb-4 ${styles.noTop}`}>
            <Row className="d-flex">
                <Col xs={6} md={8} className="d-flex align-items-center gap-4">
                <Paw className={styles.topIcon}/>
                <div>
                    <span className="primary num">{totalCount}</span>
                    <span className="btn-custom">&nbsp;개의 소식이 있습니다</span>
                </div>
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

export default NoTop;