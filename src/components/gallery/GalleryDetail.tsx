//동물을 찾습니다, 무료 분양 card layout

import { Card } from "react-bootstrap";
import styles from "./GalleryDetail.module.scss";


interface GalleryDetailProps {
  image: string;
  title: string;
  location: string;
  gender: string;
  age: string;
  breed: string;
}

const GalleryDetail = ({image, title, location, gender, age, breed} : GalleryDetailProps )=> {
    const titleLines = title.split("<br>");
    return(
        <>
        <Card className={`col-sm-3 col-6 ${styles.warp}`}>
            
            <div className={`${styles.cardImg}`}>
                <Card.Img variant="top" src={image} className={styles.imagefit} />
            </div>
            
            <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                <Card.Subtitle className={`tab primary ${styles.hashtag}`}>{location}</Card.Subtitle>
                    <Card.Title className={`body-large mt-2 mb-0 w-100 ${styles.title}`}>
                        {titleLines.map((line, i) => (
                            <span key={i}>
                            {line}
                            {i < titleLines.length - 1 && <br />}
                            </span>
                        ))}
                    </Card.Title>
                    
                    <Card.Text className={`d-flex tab text-dark ${styles.side}`}>
                        <span className="text-dark">{gender}</span>
                        <span className="text-dark border-start border-end">{age}</span>
                        <span className="text-dark">{breed}</span>
                    </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default GalleryDetail;