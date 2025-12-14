import useBannerData from "../../utils/Banner";
import iconMap from "../../utils/iconMap";
import styles from "./TitleBanner.module.scss";



type BannerProps = {color?: "primary" | "secondary" | "blend";};


const TitleBanner: React.FC<BannerProps> = ({color}) => {
    const banner = useBannerData();
    const Icon = iconMap[banner.icon];
    const BannerIcon = Icon?.hover as React.ElementType | undefined;

    return(
        <>
        <header
            className={`mt-120 d-flex align-items-center ${styles.banner}`}
            style={{backgroundImage:`url(${banner.bgImage || ""})`}}>

            <div className="grid1500 w-100 d-flex flex-column gap-4">

                <h1 className="d-flex align-items-center gap-2">    
                    <span>{banner.title}</span>
                    {BannerIcon ? <BannerIcon className={`${styles.icon} ${color ? `${color}-fill`:''}`}/> : null}
                </h1>
                <h3 className="text-dark" dangerouslySetInnerHTML={{ __html: banner.content }}/>

            </div>
        </header>
        </>
    )
}

export default TitleBanner;