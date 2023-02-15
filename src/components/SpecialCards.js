import special1 from "../images/special1.jpg";
import special2 from "../images/special2.svg";
import special3 from "../images/special3.jpg";
import SpecialCardStyles from "./styles/SpecialCards.module.css";

const SpecialCards = () => {
  const specials = [
    {
      image: special1,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    },
    {
      image: special2,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
    },
    {
      image: special3,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  const specialsItems = specials.map((menu) => {
    const image = menu.image;
    const title = menu.title;
    const price = menu.price;
    const description = menu.description;

    return (
      <div>
        <div className={SpecialCardStyles.special_card_container}>
          <div className={SpecialCardStyles.image_container}>
            <img src={image} alt="Special dessert" />
          </div>
          <div className={SpecialCardStyles.special_card_text}>
            <div className={SpecialCardStyles.special_card_title}>
              <h3>{title}</h3>
              <h3 className={SpecialCardStyles.price_text}>{price}</h3>
            </div>
            <p>{description}</p>
            <h4>Order a delivery</h4>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={SpecialCardStyles.special_cards}>{specialsItems}</div>
    </div>
  );
};

export default SpecialCards;
