import AboutStyles from '../components/styles/Aboutpage.module.css';
import aboutimage from '../images/aboutimage.png';

export default function Aboutpage() {
    return (
        <div className={AboutStyles.page_wrapper}>
            <div className={AboutStyles.content_container}>
                <section className={AboutStyles.hero_container}>
                    <div className={AboutStyles.hero_content}>
                        <h2>Experience the perfect balance of tradition and luxury.</h2>
                        <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                        <p>Book a table with us to share in this experience.</p>
                    </div>
                </section>
                <section className={AboutStyles.about_container}>
                 <div className={AboutStyles.about_content_container}>
                    <div className={AboutStyles.about_content}>
                        <h2>Our Story</h2>
                        <p>Little Lemon was founded in 2019 by a group of friends who wanted to bring a new experience to the Chicago restaurant scene. We wanted to create a place where people could come together and enjoy a delicious meal in a luxurious setting.</p>
                        <p>Our menu is inspired by traditional Mediterranean recipes, but we have added a modern twist to each dish to make them more accessible to a wider audience.</p>
                    </div>
                    </div>
                    <div className={AboutStyles.about_image_container}>
                        <img src={aboutimage} alt="Restaurant interior" />
                    </div>
                </section>
            </div>
        </div>
      )
    };