import {useState, useRef, useEffect} from "react";
import {Form, Button, InputGroup, Overlay, Popover} from "react-bootstrap";
import styles from './Search.module.css';
import searchData from "../../data/search.json";

import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";


type SearchProps = {
    choice?:("location" | "type" | "search" | "keyword")[];
    color?: "primary" | "secondary" | "blend";
    onSearchChange?:(term:string) => void;
};

const Search = (props:SearchProps) => {
    const {choice = ["location", "type", "search", "keyword"], color}=props;

    const CaretUp = AiFillCaretUp as React.FC<React.SVGProps<SVGSVGElement>>;
    const CaretDown = AiFillCaretDown as React.FC<React.SVGProps<SVGSVGElement>>;
    const SearchIcon = IoSearch as React.FC<React.SVGProps<SVGSVGElement>>;

    const searchRef = useRef<HTMLDivElement>(null);

    type LocationCategory = {
        category: string;
        title: string;
        items: string[];
    };

    type SearchDataItem = {
        id: string;
        categories?: LocationCategory[];
        items?: string[]; 
    };

    const searchDataTyped = searchData as SearchDataItem[];



    //스타일 관련 함수 : 드롭다운 박스 너비 ______________________________________

    const [wrapWidth, setWrapWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if(searchRef.current){
                setWrapWidth(searchRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize",updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    

    //폼 관련 함수 _______________________________________________________________

    const [formA, setFormA] = useState("");
    const [formB, setFormB] = useState("");



    //드롭다운 관련 함수 : 장소 ___________________________________________________

    const [selectA, setSelectA] = useState({region:"", detail:""});
    const [tempA, setTempA] = useState({region:"", detail:""});
    const [regionOpen, setRegionOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);
    const [showPopupA, setShowPopupA] = useState(false);
    const refA = useRef<HTMLButtonElement>(null);
    const refFocusA = useRef<HTMLButtonElement>(null);
    
    const locationData = searchDataTyped.find((d) => d.id === "location")?.categories || [];



    //드롭다운 관련 함수 : 동물 타입 _______________________________________________

    const [selectB, setSelectB] = useState("");
    const [tempB, setTempB] = useState("");
    const [showPopupB, setShowPopupB] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const refB = useRef<HTMLButtonElement>(null);
    const refFocusB = useRef<HTMLButtonElement>(null);

    const typeData = searchDataTyped.find((d) => d.id === "type")?.items || [];



    //드롭다운 관련 함수 : 토글 __________________________________________________

    const toggleBtn = (category:string) => {
        if(category === "area"){
            setRegionOpen((prev) => !prev);
            setDetailOpen(false);
        }else{
            setDetailOpen((prev) => !prev);
            setRegionOpen(false);
        }
    };

    const toggleType = () => {
        setTypeOpen(prev => !prev);
    }



    //드롭다운 관련 함수 : 적용 __________________________________________________

    const applyLocation = () => {
        setSelectA({...tempA});
        setShowPopupA(false);
        setRegionOpen(false);
        setDetailOpen(false);
        setTimeout(() => {
            refA.current?.focus();
        }, 50);
    };

    const applyType = () => {
        setSelectB(tempB);
        setShowPopupB(false);
        setTimeout(() => {
            refB.current?.focus();
        }, 50);
    };

    const keyApplyLocation = (e:React.KeyboardEvent<HTMLButtonElement>) => {
        if(e.key === 'Enter' || e.key === ''){
            e.preventDefault();
            applyLocation();
        }
    }

        const keyApplyType = (e:React.KeyboardEvent<HTMLButtonElement>) => {
        if(e.key === 'Enter' || e.key === ''){
            e.preventDefault();
            applyType();
        }
    }


    //검색 확인 _________________________________________________________________

    const handleSearch = () => {
        alert(`현재 검색 정보를 모아보는 페이지는 별도로 구현되어 있지 않습니다.`)
    };

    //함수 종료 _________________________________________________________________








    //코딩 시작 _________________________________________________________________

    return(
        <>
        <InputGroup className={`d-flex flex-nowrap align-items-center justify-content-between ${styles.search} ${color ? `${color}-border`:''}`}>



            {/* =====================================
            =========================================

            검색창 (기본)

            =========================================
            ======================================*/}
            <div 
                ref={searchRef}
                className={`d-flex align-items-center flex-grow-1 ${styles.searchWrap}`}>
                    
                {choice.includes("location") && (
                <button
                    ref={refA}
                    type="button"
                    className={`${styles.form} ${styles.dropdown}`}
                    aria-haspopup="listbox"
                    aria-expanded={showPopupA}
                    onClick={() => {
                        setTempA(selectA);
                        setShowPopupA((prev) => !prev);
                        setShowPopupB(false);
                        setTimeout(() => {if(refFocusA.current){refFocusA.current.focus()}}, 0);
                    }}>{selectA.region && selectA.detail
                    ? `${selectA.region} / ${selectA.detail}`
                    : selectA.region ? selectA.region
                    : selectA.detail ? selectA.detail
                    : "지역 선택"}
                </button>
                )}

                {choice.includes("type") && (
                <button
                    ref={refB}
                    type="button"
                    className={`${styles.form} ${styles.dropdown}`}
                    aria-haspopup="listbox"
                    aria-expanded={showPopupB}
                    onClick={() => {
                        setTempB(selectB);
                        setShowPopupB((prev) => !prev);
                        setShowPopupA(false);
                        setTimeout(() => {if(refFocusB.current){refFocusB.current.focus()}}, 0);
                    }}>{selectB || "동물 분류"}
                </button>
                )}

                {choice.includes("search") && (
                <Form.Control
                    type="text"
                    name="formA"
                    value={formA}
                    placeholder="검색어를 입력해 주세요"                    
                    className={`${styles.form}`}
                    onChange={(e)=>{
                        setFormA(e.target.value);
                        props.onSearchChange?.(e.target.value);
                    }}
                />
                )}

                {choice.includes("keyword") && (
                <Form.Control
                    type="text"
                    name="formB"
                    value={formB}
                    placeholder="키워드 입력"
                    className={`${styles.form}`}
                    onChange={(e)=>{
                        setFormB(e.target.value);
                        props.onSearchChange?.(e.target.value);
                    }}
                />
                )}

            </div>


            <Button
                onClick={handleSearch}
                className={`d-flex align-items-center justify-content-center btn-custom ${styles.searchBtn} ${color ? `${color}-bg-btn`:''}`}
                ><SearchIcon className={styles.icon}/>
                <span className={`d-none d-lg-block ${styles.iconTxt}`}>검색</span>
            </Button>





            {/* =====================================
            =========================================

            드롭다운 팝업 : 장소

            =========================================
            ======================================*/}

            {choice.includes("location") && (   
            <Overlay
                show={showPopupA}
                target={searchRef.current}
                placement="bottom-start"
                rootClose
                onHide={()=> {
                    setShowPopupA(false);
                    setDetailOpen(false);
                    setRegionOpen(false);
                    setTimeout(() => {
                        refA.current?.focus();
                    },50)
                }}>
                
                <Popover
                    id="popover-location"
                    className={styles.select}
                    style={{maxWidth:wrapWidth}}>

                    <Popover.Body
                        className={`d-flex flex-column align-items-center ${styles.selectBg}`}>
                        
                        {locationData.map(({category, title, items}, index) => {
                            const key = category === "area" ? "region" : "detail";
                            const isOpen = category === "area" ? regionOpen : detailOpen;

                            return(
                                <fieldset key={category} className="d-flex flex-column gap-2 w-100">
                                    <legend className={`caption ${styles.header}`}>{title}</legend>

                                    <button
                                        ref={index === 0 ? refFocusA : null}
                                        className={`d-flex justify-content-between w-100 ${styles.label}`}
                                        onClick={() => toggleBtn(category)}
                                        aria-expanded={isOpen}
                                        ><span>{tempA[key] || (category === "area" ? "전국" : "전체")}</span>
                                        <span>{isOpen ? <CaretUp/> : <CaretDown/>}</span>
                                    </button>

                                    {isOpen && (
                                        <ul className={styles.selectBody}>
                                            <div className={styles.scroll}>
                                            {items.map((item) =>(
                                                <li key={item}>
                                                <button
                                                    className={`w-100 ${styles.itemList}`}
                                                    onClick={() => setTempA(prev => ({...prev, [category === "area" ? "region" : "detail"]: item}))}
                                                    role="option"
                                                    >{item}                                                
                                                </button>
                                                </li>
                                            ))}                                        
                                            </div>
                                        </ul>
                                    )}

                                </fieldset>
                            )
                        })}

                        <Button
                            as="h6"
                            className={`primary-bg-btn ${styles.dropBtn}`}
                            onClick={applyLocation}
                            onKeyDown={keyApplyLocation}
                            >적용하기
                        </Button>

                    </Popover.Body>
                </Popover>
            </Overlay>
            )} 
            


            {/* =====================================
            =========================================

            드롭다운 팝업 : 동물 타입

            =========================================
            ======================================*/}

            {choice.includes("type") && (     
            <Overlay
                show={showPopupB}
                target={searchRef.current}
                placement="bottom-start"
                onHide={()=>{
                    setShowPopupB(false);
                    setTypeOpen(false);
                    setTimeout(() => {
                        refB.current?.focus();
                    },50)
                }}
                rootClose>
                
                <Popover
                    id="popover-type"
                    className={styles.select}
                    style={{maxWidth:wrapWidth}}>

                    <Popover.Body className={` d-flex flex-column align-items-center ${styles.selectBg}`}>

                        <fieldset className="d-flex flex-column gap-2 w-100">

                            <button
                                className={`d-flex justify-content-between w-100 ${styles.label}`}
                                onClick={() => toggleType()}
                                aria-expanded={typeOpen}
                                ref={refFocusB}
                                ><span>{tempB || "전체"}</span>
                                <span>{typeOpen ? <CaretUp/> : <CaretDown/>}</span>
                            </button>

                            {typeOpen && (
                                <ul className={`w-100 ${styles.selectBody}`}>
                                    <div className={styles.scroll}>
                                    {typeData.map((item) => (
                                        <li key={item}>
                                            <button
                                            className={`w-100 ${styles.itemList}`}
                                            onClick={() => setTempB(item)}
                                            role="option"
                                            >{item}                                                
                                        </button>
                                        </li>
                                    ))}
                                    </div>
                                </ul>
                            )}

                        </fieldset>

                        <Button
                            as="h6"
                            className={`primary-bg-btn ${styles.dropBtn}`}
                            onClick={applyType}
                            onKeyDown={keyApplyType}
                            >적용하기
                        </Button>

                    </Popover.Body>
                </Popover>
            </Overlay>
            )}

        </InputGroup>
        </>
    )
}

export default Search;