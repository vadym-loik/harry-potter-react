import { useState } from 'react';

const Gryffindor = () => {
  const [gryffData, setGryffData] = useState();

  return (
    <>
      <div className="gryffindor">
        <h2 className="gryffindor-heading">{'Gryffindor'}</h2>
        <div className="gryffindor-list">{}</div>
      </div>
    </>
  );
};

export default Gryffindor;
