import react from 'react';
import OrderonlineStyles from '../components/styles/Orderonlinepage.module.css';
import DoordashImage from '../images/doordash.jpg';
import UberEatsImage from '../images/ubereats.png';

export default function Orderonlinepage() {
    return (
        <div className={OrderonlineStyles.page_wrapper}>
            <div className={OrderonlineStyles.content_container}>
                <section className={OrderonlineStyles.hero_container}>
                    <div className={OrderonlineStyles.hero_content}>
                        <h2>Experience the perfect balance of tradition and luxury.</h2>
                        <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                        <p>Book a table with us to share in this experience.</p>
                    </div>
                </section>
                <section className={OrderonlineStyles.order_container}>
                 <div className={OrderonlineStyles.order_content_container}>
                    <div className={OrderonlineStyles.order_content}>
                        <h2>Order Up!</h2>
                        <p>Little Lemon was founded in 2019 by a group of friends who wanted to bring a new experience to the Chicago restaurant scene. We wanted to create a place where people could come together and enjoy a delicious meal in a luxurious setting.</p>
                        <p>Our menu is inspired by traditional Mediterranean recipes, but we have added a modern twist to each dish to make them more accessible to a wider audience.</p>
                    </div>
                    </div>
                    <div className={OrderonlineStyles.ordercards_container}>
                    <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className={OrderonlineStyles.card_link}>
                        <div className={OrderonlineStyles.ordercard}>
                            <img src={DoordashImage} alt="Doordash" className={OrderonlineStyles.card_image} />
                            <p className={OrderonlineStyles.card_text}>Order now with DoorDash!</p>
                        </div>
                    </a>
                    <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className={OrderonlineStyles.card_link}>
                        <div className={OrderonlineStyles.ordercard}>
                            <img src={UberEatsImage} alt="Uber Eats" className={OrderonlineStyles.card_image} />
                            <p className={OrderonlineStyles.card_text}>Order now with Uber Eats!</p>
                        </div>
                    </a>
                    </div>
                </section>
            </div>
        </div>
    )
};