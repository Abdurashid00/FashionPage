import './footer.css';
import fb from './../../image/socials/fb.svg'
import linkedIn from './../../image/socials/in.svg'
import inst from './../../image/socials/inst.svg'
import tw from './../../image/socials/tw.svg'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container footer__content">
                <div className="footer__text">
                    <p>FASHION</p>
                    <span>Complete your style with awesome clothes from us.</span>
                    <div className="footer__text-socials">
                        <a href="https://www.facebook.com/"> <img src={fb} alt="" /></a>
                        <a href="https://www.instagram.com/"><img src={linkedIn} alt="" /></a>
                        <a href="https://www.twitter.com/"><img src={inst} alt="" /></a>
                        <a href="https://www.pinterest.com/"><img src={tw} alt="" /></a>
                    </div>
                </div>
                <div className="footer__links">
                    <ul>
                        <li ><a className="first-link" href="#!">company</a></li>
                        <li><a href="#!">about</a></li>
                        <li><a href="#!">contact us</a></li>
                        <li><a href="#!">support</a></li>
                        <li><a href="#!">careers</a></li>
                    </ul>
                    <ul>
                        <li ><a className="first-link" href="#!">quick link</a></li>
                        <li><a href="#!">share location</a></li>
                        <li><a href="#!">orders tracking</a></li>
                        <li><a href="#!">size guide</a></li>
                        <li><a href="#!">FAQs</a></li>
                    </ul>
                    <ul>
                        <li ><a className="first-link" href="#!">legal</a></li>
                        <li><a href="#!">terms & conditions</a></li>
                        <li><a href="#!">privacy policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
