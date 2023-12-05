import './gryffindor.scss';
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
    return gryffData?.map((aplicant) => (
      <Card
        aplicants={aplicant}
        key={uuidv4()}
      />
    ));
  };

  return (
    <>
      <div className="gryffindor">
        <img
          src={logo}
          className="gryffindor-logo"
          alt="gryffindor logo"
        ></img>
        <div className="gryffindor-list">{renderListOfCards()}</div>
      </div>
    </>
  );
};

export default Gryffindor;
