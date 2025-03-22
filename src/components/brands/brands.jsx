import './brands.css';
import hm from './../../image/brands/HM.png'
import obey from './../../image/brands/Obey.png'
import shopify from './../../image/brands/Shopify.png'
import lacoste from './../../image/brands/Lacoste.png'
import levis from './../../image/brands/Levis.png'
import amazon from './../../image/brands/Amazon.png'
const Brands = () => {
    return ( 
        <section className="brands">
            <div className="container">
                <ul className="brands-list">
                    <li><a href="#!"><img src={hm} alt="" /></a></li>
                    <li><a href="#!"><img src={obey} alt="" /></a></li>
                    <li><a href="#!"><img src={shopify} alt="" /></a></li>
                    <li><a href="#!"><img src={lacoste} alt="" /></a></li>
                    <li><a href="#!"><img src={levis} alt="" /></a></li>
                    <li><a href="#!"><img src={amazon} alt="" /></a></li>
                </ul>
            </div>
        </section>
     );
}
 
export default Brands;