import './promo.css';
import PromoImg from './../../image/images/header-img.jpg';
const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo-text">

                        <div className="promo-title">
                            <span className="highlight">
                                <span>
                                    LET'S
                                </span>
                            </span> 
                            
                            EXPLORE 
                            
                            <span className="highlight highlight--yellow    ">
                                <span>
                                    UNIQUE
                                </span>
                            </span> 
                            
                            
                            CLOTHES.
                        
                        
                        </div>
                        <div className="promo-desc">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="promo__btn-wrapper">
                            <a href="/" className="promo__btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="promo-img">
                        <img src={PromoImg} alt="Promo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;