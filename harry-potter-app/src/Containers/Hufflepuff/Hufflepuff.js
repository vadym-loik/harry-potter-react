import '../index.scss';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/hufflepuff.png';
import Card from '../../Components/Card/Card';

const Hufflepuff = () => {
  const [huffData, setHuffData] = useState();

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/hufflepuff')
      .then((response) => response.json())
      .then((data) => {
        setHuffData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const renderListOfCards = () => {
    return huffData?.slice(0, 10).map((aplicant) => (
      <Card
        aplicants={aplicant}
        key={uuidv4()}
      />
    ));
  };

  return (
    <div
      className="page-wrap"
      style={{ backgroundColor: 'yellow' }}
    >
      <img
        src={logo}
        className="page-logo"
        alt="hufflepuff logo"
      ></img>

      <div className="page">
        <div className="page-list">{renderListOfCards()}</div>
      </div>
    </div>
  );
};

export default Hufflepuff;
