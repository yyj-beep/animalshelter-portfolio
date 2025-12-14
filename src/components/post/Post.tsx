import { Badge } from 'react-bootstrap';
import { useState } from 'react';

import styles from './Post.module.scss';
import postList, { PostDataType } from '../../data/postData';
import PostModal from "../modal/PostModal";

import { IoChatbubbleOutline } from "react-icons/io5";

const Chat = IoChatbubbleOutline as React.FC<React.SVGProps<SVGAElement>>;

const Post = () => {

    const[selectedPost, setSelectedPost] = useState<PostDataType | null>(null);
    const[showModal, setShowModal] = useState(false);

    const handleTitleClick = (post: PostDataType) => {
        setSelectedPost(post);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPost(null);
    };

    return(
        <section>
            <ul>
            {postList.map((post, index) => (
                <li key={index}>
                <article className={`d-flex justify-content-between h-100 w-100 ${styles.wrapper}`} aria-labelledby="post-title">
                    <div className={`post-wrapper d-flex flex-column justify-content-between ${styles.content}`}>
                        <div className="post-content d-flex flex-column gap-3">
                            <div className="d-flex gap-3 align-items-center">

                                <h3 id={`post-title-${index}`} className={styles.title}
                                onClick={()=>handleTitleClick(post)}
                                >{post.title}</h3>

                                <Badge
                                    aria-label="새로운 게시글"
                                    className={`primary-bg tab ${styles.titleBadge}`}
                                    >NEW!
                                </Badge>

                            </div>

                            <div className="d-md-flex gap-4 align-items-center">
                                <dl className="d-flex gap-2 align-items-baseline">
                                <dt className="caption">모집 기간</dt>
                                <dd className="body-small">{post.recruitmentPeriod}</dd>
                                </dl>

                                <dl className="d-flex gap-2 align-items-baseline">
                                <dt className="caption">봉사 기간</dt>
                                <dd className="body-small">{post.volunteerPeriod}</dd>
                                </dl>
                            </div>

                            <p className={`${styles.txt}`}>{post.content}</p>
                        
                        </div>



                        <ul className="post-meta d-flex gap-5 align-items-center">

                            <li className="region tab d-flex gap-2 align-items-center">
                            <strong className={`blend-bg ${styles.region}`}>{post.activityLocation}</strong>
                            </li>

                            <li className="nav-small text-dark">{post.organizationName}</li>

                            <li>
                            <time
                                aria-label={`작성일자-${post.date}`}
                                dateTime={post.date}
                                className="nav-small text-light"
                                >{post.date}
                            </time>
                            </li>

                            <li className="d-flex gap-2 align-items-center nav-small text-light">
                            <Chat aria-label="댓글수" className={styles.icon}/>{post.comments}
                            </li>
                        </ul>
                    </div>
                    
                    <figure aria-hidden="true">
                    <img src={post.image} alt="현장 참고 사진" />
                    </figure>
                    
                </article>
                <hr/>
                </li>
            ))}
            </ul>

            {showModal && selectedPost && (
                <PostModal
                    show={showModal}
                    onClose={handleCloseModal}
                    data={selectedPost}/>
            )}

        </section>
    )
}

export default Post;