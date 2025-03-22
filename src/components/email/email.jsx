import './email.css';

const Email = () => {
    return (
        <section className="email">
            <h2 className="email-title">
                JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </h2>
            <div className="email-desc">
                Type your email down below and be young wild generation
            </div>
            <form className="email-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Send</button>
                </form>
        </section>
    );
}

export default Email;

