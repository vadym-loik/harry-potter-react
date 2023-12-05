import { useState } from 'react';

const Slytherin = () => {
  const [slythData, setSlythData] = useState();

  return (
    <>
      <div className="slytherin">
        <h2 className="slytherin-heading">{'Slytherin'}</h2>
        <div className="slytherin-list">{}</div>
      </div>
    </>
  );
};

export default Slytherin;
