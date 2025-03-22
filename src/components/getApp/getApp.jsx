import './getApp.css';
import getAppImg from './../../image/images/vouchers-img.png'
import googlePlay from './../../image/icons/google-play.png'
import appStore from './../../image/icons/app-store.png'
const GetApp = () => {
    return (
        <section className="getApp">
            <div className="container">
                <div className="getApp__content">

                    <div className="getApp__text">
                        <span className="getApp-title">
                            DOWNLOAD APP &
                            GET THE VOUCHER!
                        </span>
                        <div className="getApp-desc">
                            Get 30% off for first transaction using
                            Rondovision mobile app for now.
                        </div>
                        <div className="download-links">
                            <a href="#!" className="download-link"><img src={googlePlay} alt="" /></a>
                            <a href="#!" className="download-link"><img src={appStore} alt="" /></a>
                        </div>

                    </div>
                    <div className="getApp-img">
                        <img src={getAppImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetApp;