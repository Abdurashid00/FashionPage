import './favourite.css';
import Cards from "../cards/card";
import cat01img from './../../image/images/promo-01.jpg'
import cat02img from './../../image/images/promo-02.jpg'

const Favourite = () => {
    return ( 
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <h2 className="title-2">
                    Young’s Favourite
                    </h2>
                </div>
                <div className="favourite-cards">
                    <Cards title="Trending on instagram" img={cat01img} />
                    <Cards title="All Under $40" img={cat02img}/>
                </div>
            </div>
        </section>
     );
}
 
export default Favourite;