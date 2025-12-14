//봉사/후원하기 > 자원봉사자 카테고리 레이아웃

import { useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import Post from "../../components/post/Post";
import Search from "../../components/search/Search";
import styles from "./Category.module.css";
import bannerImg from '../../assets/img/category/categorybg.png'
import TitleBanner from '../../layout/banner/TitleBanner';
import PostTop from './PostTop';
import Pagination from '../../components/pagination/Pagination';
import postData from "../../data/postData";

const Category: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const petstoryPosts = postData.filter(post =>
    post.title.includes(searchTerm)
);


    const sortedNotices = useMemo(() => {
        return [...petstoryPosts].sort(
            (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    },[]);

    const filteredNotices = useMemo(() => {
        return sortedNotices.filter(n => n.title.includes(searchTerm));
    }, [searchTerm, sortedNotices])

    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const startPage = (currentPage - 1) * pageSize;
    const paginatedData = petstoryPosts.slice(startPage, startPage + pageSize);

    return(
        <>
        <TitleBanner color="blend"/>
        <Container fluid className="grid1500 py-C px-4">
            <Row className="pb-40">
                <PostTop
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
                /><Post/>
            </Row>
            <Pagination
            totalItems={petstoryPosts.length}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pageSize={6}/>
        </Container>
        </>
    )
};

export default Category;