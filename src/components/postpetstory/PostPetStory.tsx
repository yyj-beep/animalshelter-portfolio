// 커뮤니티> 반려동물 이야기 body comp //
import React, { useState, useMemo } from 'react';
import { Badge } from 'react-bootstrap';
import { IoChatbubbleOutline, IoPawOutline } from 'react-icons/io5';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md';
import { LuPenLine } from 'react-icons/lu'; // ✏️ 작성하기 아이콘
import styles from './PostPetStory.module.scss';
import SearchIcon from '../icons/searchIcon';
import { petstoryPosts, PetstoryPost } from '../../data/petstoryData';

// ✅ 아이콘 컴포넌트 타입 지정
const ChatIcon = IoChatbubbleOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const PawIcon = IoPawOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const ArrowLeft = MdOutlineKeyboardArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>;
const DoubleArrowLeft = MdOutlineKeyboardDoubleArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>;
const ArrowRight = MdOutlineKeyboardArrowRight as React.FC<React.SVGProps<SVGSVGElement>>;
const DoubleArrowRight = MdOutlineKeyboardDoubleArrowRight as React.FC<React.SVGProps<SVGSVGElement>>;
const PenIcon = LuPenLine as React.FC<React.SVGProps<SVGSVGElement>>;

// ✅ 본문 미리보기 길이 제한 함수
const MAX_PREVIEW_LENGTH = 45;
const getPreview = (text: string) =>
  text.length > MAX_PREVIEW_LENGTH ? text.slice(0, MAX_PREVIEW_LENGTH) + '...' : text;

// ✅ 한 페이지당 보여줄 게시물 수
const itemsPerPage = 6;

const PostPetstory: React.FC = () => {
  // 🔧 상태 관리: 검색어와 현재 페이지
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 검색어 필터링 (대소문자 무시)
  const filteredPosts = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return petstoryPosts.filter(post =>
      post.title.toLowerCase().includes(term) || post.content.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // 📄 페이지네이션 적용
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPosts.slice(start, start + itemsPerPage);
  }, [filteredPosts, currentPage]);

  // 📌 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  return (
    <section >
      <div className={styles.controls}>
  {/* 왼쪽: 작성하기 버튼 */}
        <div className={styles.leftControls}>
          <button className={styles.writeButton}>
            <span className={styles.writeText}>작성하기</span>
            <PenIcon className={styles.writeIcon} />
          </button>
        </div>

  {/* 오른쪽: 검색창 */}
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="검색어를 입력해 주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <SearchIcon />
          </button>
        </div>
      </div>


      {/* 📋 게시물 리스트 */}
      <ul>
        {paginatedPosts.map((post: PetstoryPost) => (
          <li key={post.id}>
            <article className={`d-flex align-items-start w-100 ${styles.wrapper}`}>
              {/* 📝 텍스트 영역 */}
              <div className={`d-flex flex-column gap-3 ${styles.content}`}>
                {/* 🏷️ 타이틀 + 뱃지 */}
                <div className="d-flex gap-3 align-items-center">
                  <h3 className={styles.title}>{post.title}</h3>
                  {post.isEnded && (
                    <Badge className={`badge badge-end ${styles.titleBadge}`}>종료</Badge>
                  )}
                  {post.isNew && (
                    <Badge className={`badge badge-new ${styles.titleBadge}`}>NEW!</Badge>
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

      {/* 📌 페이지네이션 영역 */}
      <div className={styles.pagination}>
        {/* ⏮ 첫 페이지로 이동 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          <DoubleArrowLeft className={styles.arrowIcon} />
        </button>

        {/* ◀ 이전 페이지 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ArrowLeft className={styles.arrowIcon} />
        </button>

        {/* 🔢 페이지 번호 버튼 */}
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              <span className={styles.pageNumber}>{page}</span>
              {isActive && <PawIcon className={styles.pawIcon} />}
            </button>
          );
        })}

        {/* ▶ 다음 페이지 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ArrowRight className={styles.arrowIcon} />
        </button>

        {/* ⏭ 마지막 페이지로 이동 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <DoubleArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default PostPetstory;
