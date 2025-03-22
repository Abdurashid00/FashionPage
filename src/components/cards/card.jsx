import styles from './card.module.css'
import arrowImg from './../../image/icons/arrow.svg'
const Cards = ({ title, img }) => {

    return (
        <div className={styles.card}>
            <a href="#!" className={styles.card__link} > </a>
            <img className={styles.card__img} src={img} alt="" />
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>{title}</div>
                    <div className={styles.card__muted}>Explore Now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
}

export default Cards;