import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function CardService({ subjects, price, icons, last }) {
  return (
    <div className={`card-service ${last ? "card-service--last" : ""}`}>
      {icons}
      <ul className="card-service__list">
        {subjects.map((subject, index) => (
          <li key={index} className="card-service__list--item">
            <IoCheckmarkCircleOutline />
            {subject}
          </li>
        ))}
      </ul>
      <p className="card-service__price">{price}€ / séance</p>
    </div>
  );
}

CardService.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  icons: PropTypes.any.isRequired,
  last: PropTypes.bool.isRequired,
};

export default CardService;
