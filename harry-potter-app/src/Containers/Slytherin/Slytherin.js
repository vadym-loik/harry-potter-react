import '../Gryffindor/gryffindor.scss';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/slytherin.png';
import Card from '../../Components/Card/Card';

const Slytherin = () => {
  const [slythData, setSlythData] = useState();

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/slytherin')
      .then((response) => response.json())
      .then((data) => {
        setSlythData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const renderListOfCards = () => {
    return slythData?.slice(0, 10).map((aplicant) => (
      <Card
        aplicants={aplicant}
        key={uuidv4()}
      />
    ));
  };

  return (
    <div
      className="gryffindor-wrap"
      style={{ backgroundColor: 'green' }}
    >
      <img
        src={logo}
        className="gryffindor-logo"
        alt="gryffindor logo"
      ></img>

      <div className="gryffindor">
        <div className="gryffindor-list">{renderListOfCards()}</div>
      </div>
    </div>
  );
};

export default Slytherin;
