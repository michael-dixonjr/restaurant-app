import TestimonialStyles from "./styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <section>
      <div className={TestimonialStyles.container}>
        <p className={TestimonialStyles.testimonial}>
          stuff right here
        </p>
        <div className={TestimonialStyles.centered_items}>
          <img
            className={TestimonialStyles.logo}
            src="add_logo_url"
            alt="logo"
          />
          <div className={TestimonialStyles.user_details}>
            <h4 className={TestimonialStyles.username}>John Doe</h4>
            <p className={TestimonialStyles.role}>Blogger</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// may have to make a sepetate component for the testimonial information