import { useState } from 'react';

const Hufflepuff = () => {
  const [huffData, setHuffData] = useState();

  return (
    <>
      <div className="hufflepuff">
        <h2 className="hufflepuff-heading">{'Hufflepuff'}</h2>
        <div className="hufflepuff-list">{}</div>
      </div>
    </>
  );
};

export default Hufflepuff;
