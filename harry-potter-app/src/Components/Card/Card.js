import './card.scss';

const Card = (props) => {
  let aplicants = props.aplicants;

  return (
    <>
      <div
        className="card"
        key={aplicants.id}
      >
        <img
          src={aplicants.image}
          className="card-img"
          alt="avatar"
        ></img>
        <div className="card-container">
          <h3>
            <b>"{aplicants.name}"</b>
          </h3>
          <h4>
            <b>Actor: {aplicants.actor}</b>
          </h4>
          <p>Patronus: {aplicants.patronus}</p>
          <p>House: {aplicants.house}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
