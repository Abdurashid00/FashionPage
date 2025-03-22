import Cards from "../cards/card";
import "./arrivals.css"

import cat01img from './../../image/categories/cat-01.jpg'
import cat02img from './../../image/categories/cat-02.jpg'
import cat03img from './../../image/categories/cat-03.jpg'

const newArrivals = () => {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">
                        NEW ARRIVALS
                    </h2>
                </div>
                <div className="arrivals-cards">
                    <Cards title="Hoodies & Sweetshirts" img={cat01img} />
                    <Cards title="Coats & Parkas" img={cat02img}/>
                    <Cards title="Tees & T-Shirt" img={cat03img}/>
                </div>
            </div>
        </section>

    );
}

export default newArrivals;