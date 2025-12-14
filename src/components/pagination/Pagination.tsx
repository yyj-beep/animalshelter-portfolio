import React, { useState, useMemo } from "react";
import styles from "./Pagination.module.css";

import { IoPaw } from "react-icons/io5";
import { FiChevronsLeft, FiChevronsRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Paw = IoPaw as React.FC<React.SVGProps<SVGSVGElement>>;
const LeftA = FiChevronLeft  as React.FC<React.SVGProps<SVGSVGElement>>;
const LeftB = FiChevronsLeft as React.FC<React.SVGProps<SVGSVGElement>>;
const RightA = FiChevronRight  as React.FC<React.SVGProps<SVGSVGElement>>;
const RightB =  FiChevronsRight as React.FC<React.SVGProps<SVGSVGElement>>;

interface PaginationProps {
    totalItems: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    pageSize?: number;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems, currentPage, onPageChange, pageSize = 6}) => {
        
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const pages = useMemo(() => {
        let start = currentPage - 1;
        let end = currentPage + 1;

        if(start < 1){start = 1;
        end = Math.min(3, totalPages);
        }if(end > totalPages){end = totalPages;
        start = Math.max(1, totalPages - 2);
        }return Array.from({ length: end-start+1 }, (_, i) => start + i);
    }, [currentPage, totalPages]);

    if (totalPages < 1) return null;



    //코딩 시작 _________________________________________________________________

    return (
        <>
        <nav aria-label="pagination" className={`d-flex justify-content-center ${styles.pagination}`}>
            <ul className="d-flex">
                <li>
                    <button
                        onClick={() => onPageChange(1)}
                        disabled={currentPage === 1}
                        aria-label="첫 페이지"
                        ><LeftB className={styles.icon}/>
                    </button>
                </li>

                <li>
                    <button
                        onClick={() => onPageChange(currentPage-1)}
                        disabled={currentPage === 1}
                        aria-label="이전 페이지"
                        ><LeftA className={styles.icon}/>
                    </button>
                </li>

                {pages.map((page) => (
                <li key={page}>
                    <button
                    onClick={() => onPageChange(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                    className={page === currentPage ? styles.active : ""}
                    >{page}
                    {page === currentPage && <Paw className={styles.paw} />}
                    </button>
                </li>
                ))}

                <li>
                    <button
                        onClick={() => onPageChange(currentPage+1)}
                        disabled={currentPage === totalPages}
                        aria-label="다음 페이지"
                        ><RightA className={styles.icon}/>
                    </button>
                </li>

                <li>
                    <button
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage === totalPages}
                        aria-label="마지막 페이지"
                        ><RightB className={styles.icon}/>
                    </button>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default Pagination;