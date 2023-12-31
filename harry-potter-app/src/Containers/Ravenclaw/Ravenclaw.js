import '../index.scss';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/ravenclaw.png';
import Card from '../../Components/Card/Card';

const Ravenclaw = () => {
  const [ravenData, setRavenData] = useState();

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/ravenclaw')
      .then((response) => response.json())
      .then((data) => {
        setRavenData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const renderListOfCards = () => {
    return ravenData?.slice(0, 10).map((aplicant) => (
      <Card
        aplicants={aplicant}
        key={uuidv4()}
      />
    ));
  };

  return (
    <div
      className="page-wrap"
      style={{ backgroundColor: 'darkblue' }}
    >
      <img
        src={logo}
        className="page-logo"
        alt="ravenclaw logo"
      ></img>

      <div className="page">
        <div className="page-list">{renderListOfCards()}</div>
      </div>
    </div>
  );
};

export default Ravenclaw;
