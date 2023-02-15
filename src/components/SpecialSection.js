import SpecialCards from "./SpecialCards";
import SpecialSectionStyles from './styles/SpecialSection.module.css';


const SpecialSection = () => {
  return (
    <div className={SpecialSectionStyles.special_section_container}>
      <div className={SpecialSectionStyles.special_section_title}>
            <h1>This Week's Specials</h1>
            <div className="btn-container">
                <button className={SpecialSectionStyles.menu_button}>Online Menu</button>
            </div>
      </div>
      <SpecialCards />
    </div>
  )
}

export default SpecialSection;