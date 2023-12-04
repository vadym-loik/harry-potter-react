import './card.scss';

const Card = (props) => {
  let cardInfo = props;

  return (
    <>
      <div className="card">
        <img
          src={'https://ik.imagekit.io/hpapi/harry.jpg'}
          alt="Avatar"
        ></img>
        <div className="card-container">
          <h4>
            <b>{'Harry Potter'}</b>
          </h4>
          <p>Patronus:{}</p>
          <p>House:{}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
