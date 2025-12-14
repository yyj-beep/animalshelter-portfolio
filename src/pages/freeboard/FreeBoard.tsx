// 커뮤니티> 반려동물 이야기 body comp //
import React, { useState, useMemo } from 'react';
import { Badge, Container } from 'react-bootstrap';
import styles from './FreeBoard.module.css';
import { petstoryPosts, PetstoryPost } from '../../data/petstoryData';
import FreeTop from './FreeTop';
import Pagination from '../../components/pagination/Pagination';
import TitleBanner from '../../layout/banner/TitleBanner';
import { IoChatbubbleOutline } from 'react-icons/io5';

const ChatIcon = IoChatbubbleOutline as React.FC<React.SVGProps<SVGSVGElement>>;


// ✅ 본문 미리보기 길이 제한 함수
const MAX_PREVIEW_LENGTH = 45;
const getPreview = (text: string) =>
  text.length > MAX_PREVIEW_LENGTH ? text.slice(0, MAX_PREVIEW_LENGTH) + '...' : text;

const PostPetstory: React.FC = () => {

    
  const [searchTerm, setSearchTerm] = useState("");

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


    return (
        <>

        <TitleBanner color="secondary"/>

        <Container fluid className="grid1500 py-C px-4">
            <FreeTop
                searchValue={searchTerm}
                onSearchChange={setSearchTerm}
            />
            <section className="pb-40">
            <ul>
                {paginatedData.map((post: PetstoryPost) => (
                <li key={post.id}>
                    <article className={`d-flex align-items-start w-100 ${styles.wrapper}`}>
                    {/* 📝 텍스트 영역 */}
                    <div className={`d-flex flex-column gap-3 ${styles.content}`}>
                        {/* 🏷️ 타이틀 + 뱃지 */}
                        <div className="d-flex gap-3 align-items-center">
                        <h3 className={styles.title}>{post.title}</h3>
                        {post.isEnded && (
                        <Badge className={`badge badge-end secondary-bg ${styles.titleBadge}`}>종료</Badge>
                        )}
                        {post.isNew && (
                        <Badge className={`badge badge-new secondary-bg ${styles.titleBadge}`}>NEW!</Badge>
                        )}
                        </div>

                        {/* 📄 본문 미리보기 */}
                        <p className={styles.txt}>{getPreview(post.content)}</p>

                        {/* 🏷️ 해시태그 리스트 */}
                        <ul className={`d-flex flex-wrap gap-2 ${styles.tag}`}>
                        {post.tags.map((tag, index) => (
                            <li key={index} className={`tab secondary-dark-line ${styles.hashtag}`}>{tag}</li>
                        ))}
                        </ul>

                        {/* 👤 작성자 + 날짜 + 댓글 수 */}
                        <div className={`d-flex gap-5 align-items-center ${styles.postMeta}`}>
                        <span className="nav-small text-dark">{post.author}</span>
                        <time dateTime={post.date} className="nav-small text-light">{post.date}</time>
                        <div className={`d-flex align-items-center gap-1 ${styles.commentInfo}`}>
                            <ChatIcon className={styles.commentIcon} />
                            <span className={styles.commentCount}>{post.commentCount}</span>
                        </div>
                        </div>
                    </div>

                    {/* 🖼️ 이미지 영역 */}
                    <figure aria-hidden="true">
                        <img src={post.imageUrl} alt={`${post.title} 관련 이미지`} />
                    </figure>
                    </article>
                    <hr />
                </li>
                ))}
            </ul>
            </section>

            <Pagination
            totalItems={petstoryPosts.length}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pageSize={6}/>

        </Container>
        </>
    );
};

export default PostPetstory;
