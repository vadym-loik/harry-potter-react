import '../index.scss';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/gryffindor.png';
import Card from '../../Components/Card/Card';

const Gryffindor = () => {
  const [gryffData, setGryffData] = useState();

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then((response) => response.json())
      .then((data) => {
        setGryffData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const renderListOfCards = () => {
    return gryffData?.slice(0, 10).map((aplicant) => (
      <Card
        aplicants={aplicant}
        key={uuidv4()}
      />
    ));
  };

  return (
    <div className="page-wrap">
      <img
        src={logo}
        className="page-logo"
        alt="gryffindor logo"
      ></img>

      <div className="page">
        <div className="page-list">{renderListOfCards()}</div>
      </div>
    </div>
  );
};

export default Gryffindor;
