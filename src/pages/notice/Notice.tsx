import styles from './Notice.module.css';
import { Badge, Container } from "react-bootstrap";
import Pagination from "../../components/pagination/Pagination";
import { RiEyeLine } from "react-icons/ri";
import { useMemo, useState } from 'react';
import { noticeList } from '../../data/notices';
import NoTop from './notop/NoTop';
import TitleBanner from '../../layout/banner/TitleBanner';

const View = RiEyeLine as React.FC<React.SVGProps<SVGSVGElement>>;


const Notice: React.FC =()=>{

    const [searchTerm, setsearchTerm] = useState("");

    const sortedNotices = useMemo(() => {
        return [...noticeList].sort(
            (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    },[]);

    const filteredNotices = useMemo(() => {
        return sortedNotices.filter(n => n.title.includes(searchTerm));
    }, [searchTerm, sortedNotices])

    const pageSize = 7;
    const [currentPage, setCurrentPage] = useState(1);
    const startPage = (currentPage - 1) * pageSize;
    const paginatedData = sortedNotices.slice(startPage, startPage + pageSize);



    return(
        <>
        <TitleBanner color="secondary"/>

        <Container fluid className="grid1500 py-C px-4">
            <NoTop
                totalCount={filteredNotices.length}
                searchValue={searchTerm}
                onSearchChange={setsearchTerm}
            />

            <section className="pb-40">
                <header className={`d-flex bg-color btn-custom ${styles.header}`}>
                    <span className="no col-1 d-flex align-items-center justify-content-center">No</span>
                    <span className="title col-7 d-flex align-items-center justify-content-center">제목</span>
                    <span className="date col-2 d-flex align-items-center justify-content-center">작성일</span>
                    <span className="views col-2 d-flex align-items-center justify-content-center">조회수</span>
                </header>
            
                <ul>
                {paginatedData.map((notice,index) => {
                const no = sortedNotices.length - (startPage+index);

                return(
                    <li key={notice.id}>
                        <article
                            className={`d-flex ${styles.content}`}
                            aria-labelledby={`notice-title-${notice.id}`}>

                            <span className="no col-1 d-flex align-items-center justify-content-center btn-custom">{no}</span>
                            
                            <div className="title col-7 d-flex align-items-center body-large gap-3">
                                <h6 id={`notice-title-${notice.id}`} className={styles.title}>{notice.title}</h6>

                                {/* True = 대응하는 Badge 출력 */}
                                {notice.isNew && (
                                <Badge
                                    aria-label="새로운 글"
                                    className={`secondary-bg tab ${styles.titleBadge}`}
                                    >NEW!
                                </Badge>
                                )}

                            </div>

                            <time
                                dateTime={notice.date}
                                className="date col-2 d-flex align-items-center justify-content-center text-dark"
                                aria-label={`작성일 ${notice.date}`}
                                >{notice.date}
                            </time>

                            <span className="views col-2 d-flex align-items-center justify-content-center text-dark gap-2">
                                <View aria-hidden="true" className={styles.icon}/>
                                {notice.viewCount}
                            </span>
                            
                        </article>
                    </li>
                )
                })}

                </ul>
            
            </section>

            <Pagination
            totalItems={noticeList.length}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            pageSize={7}/>

        </Container>
        </>
    )
};

export default Notice;