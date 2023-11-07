import PropTypes from "prop-types";
import Image from "next/image";

function Testimonial({ name, text, img, source }) {
  return (
    <figure className="testimonial flex flex--center">
      <div className="testimonial__img--box flex flex--column flex--center">
        <Image
          className="testimonial__img"
          src={img}
          alt={name}
          height={150}
          width={150}
        />
        <figcaption className="testimonial__name">
          {name} ({source})
        </figcaption>
      </div>

      <div className="testimonial__text-box">
        <blockquote className="testimonial__text">{text}</blockquote>
      </div>
    </figure>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Testimonial;
