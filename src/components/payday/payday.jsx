import './payday.css';
import PaydayImg from './../../image/images/promo-img.jpg';



const Payday = () => {
    return (
        <section className="payday">
            <div className="payday__content">
                <div className="payday-img">
                    <img src={PaydayImg} alt="" />
                </div>
                <div className="payday__text">
                    <span className="payday-title">
                        <span>
                            PAYDAY
                        </span>
                        <br />
                         SALE NOW
                    </span>
                    <div className="payday-desc">
                    Spend minimal $100 get 30% off
                    voucher code for your next purchase
                    </div>
                    <div className="payday-date">
                    1 June - 10 June 2021
                    </div>
                    <div className="payday-desc">
                    *Terms & Conditions apply
                    </div>
                    <button className="promo__btn">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Payday;