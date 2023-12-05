import { useState } from 'react';

const Ravenclaw = () => {
  const [ravenData, setRavenData] = useState();

  return (
    <>
      <div className="ravenclaw">
        <h2 className="ravenclaw-heading">{'Ravenclaw'}</h2>
        <div className="ravenclaw-list">{}</div>
      </div>
    </>
  );
};

export default Ravenclaw;
