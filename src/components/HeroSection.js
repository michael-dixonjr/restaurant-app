import HeroStyles from './styles/HeroSection.module.css';
import heroimage from '../images/heroimage.jpg';

const HeroSection = () => {
  return (
    <div className={HeroStyles.heroBackground}>
        <div className={HeroStyles.heroContainer}>
            <div className={HeroStyles.heroLeft}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className={HeroStyles.reserveTableButton}>do stuff</button>
            </div>
            <div className={HeroStyles.heroRight}>
                <div className={HeroStyles.imagebox}>
                    {<img src={heroimage} alt="Serving delicious dish" />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;
