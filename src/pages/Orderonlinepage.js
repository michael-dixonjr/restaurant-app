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
                        <p>Order a delivery to share in this experience.</p>
                    </div>
                </section>
                <section className={OrderonlineStyles.order_container}>
                 <div className={OrderonlineStyles.order_content_container}>
                    <div className={OrderonlineStyles.order_content}>
                        <h2>Order Up!</h2>
                        <p>Don't miss out on the vibrant flavors of Little Lemon's Mediterranean cuisine, perfectly crafted with a modern twist! Indulge in our delectable dishes and enjoy the luxury of a fine dining experience right in the comfort of your own home. Click the "Order Now" button and treat yourself to a culinary adventure that will delight your senses and leave you craving for more. Experience the taste of Little Lemon today – your taste buds will thank you!</p>
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