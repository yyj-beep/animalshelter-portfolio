import {Container} from "react-bootstrap";
import styles from "./Footer.module.scss";

const Footer = () => {
    return(
        <>
        <footer className={`bg-color ${styles.footer}`}>
        <Container fluid className="d-flex flex-column gap-4 content-grid">
            <ul className={`d-flex flex-wrap ${styles.content}`}>
                <li><a  href="#" className="btn-custom">개인정보 취급방침</a></li>
                <li>개인정보 책임관리자: 정민수</li>
            </ul>

            <div className="d-flex flex-column gap-2">
            <ul className={`d-flex flex-wrap ${styles.content}`}>
                <li>㈜상상유니버스</li>
                <li>대표자: 정민수</li>
                <li>서울특별시 마포구 독막로28길 10</li>
            </ul>

            <ul className={`d-flex flex-wrap ${styles.content}`}>
                <li>사업자번호: 898-87-00897</li>
                <li>동물판매업 등록번호: 3130000-045-2018-0050</li>
                <li>통신판매업 등록번호: 2020-서울마포-0181</li>
            </ul>

             <ul className={`d-flex flex-wrap ${styles.content}`}>
                <li>상담센터: [<a href="#">상담문의하기</a>] 
                    <span className="body-small"> (10:00~16:00, 토일 휴무)</span>
                </li>
                <li>이메일: <a href="#">master@zooseyo.com</a></li>
            </ul>
            </div>

            <p>ⓒ 2025 유기견보호센터 All Rights Reserved.</p>
        </Container>
        </footer>
        </>
    )
};

export default Footer;