import React from 'react';
import styles from '../Main.module.css';

import { volunteerList } from '../../../data/volunteer';
import { sponsorList } from '../../../data/sponsor';

const Main: React.FC = () => {
    return(
        <>
        <section className={`${styles.mainAdd} container row pt-40 pb-80 grid1500`}>
            
            {/* ======= 자원봉사 게시글 ======= */}
            <article className="col-md-6 d-flex flex-column gap-3">
                <header className="d-flex justify-content-between">
                    <h2>자원봉사</h2>
                    <button className="btn btn-link body-small">더보기</button>
                </header>
            
                <ul className="d-flex flex-column">
                    {volunteerList.slice(0,5).map((vItem) => (
                    <li
                        key={vItem.id}
                        className="d-flex gap-4 align-items-center justify-content-between">
                        <strong className="primary-bg caption">{vItem.region}</strong>
                        <span className={`${styles.title} flex-fill`}>{vItem.title}</span>
                        <time dateTime="2024-04-07" className="text-light body-small">{vItem.date.replace(/-/g,".")}</time>
                    </li>
                    ))}
                </ul>
            </article>

            {/* ======= 후원요청 게시글 ======= */}
            <article className="col-md-6 d-flex flex-column gap-3 mt-5 mt-md-0">
                <header className="d-flex justify-content-between">
                    <h2>후원 요청</h2>
                    <button className="btn btn-link body-small">더보기</button>
                </header>

                <ul className="d-flex flex-column">
                    {sponsorList.slice(0,5).map((sItem) => (
                    <li
                        key={sItem.id}
                        className="d-flex gap-4 align-items-center justify-content-between">
                        <strong className="secondary-bg caption">{sItem.region}</strong>
                        <span className={`${styles.title} flex-fill`}>{sItem.title}</span>
                        <time dateTime="2025-03-09" className="text-light body-small">{sItem.date.replace(/-/g,".")}</time>
                    </li>
                    ))}
                </ul>
            </article>
        </section>
        </>
    )
};

export default Main;