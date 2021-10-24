import '../styles/Parts.css';
import { useState, useEffect } from 'react';

function Parts() {

  const [partList, setPartList] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/parts`)
      .then(initRes => {
        initRes.json().then(part_list => {
          setPartList(part_list);
        });
      });
  }, []);

  return (
    <div className='parts'>
      {
        partList &&
        partList.map(piece => (
          <div key={piece._id} className='part'>
            <a href={`/parts/${piece._id}`}>{piece.partNumber}</a>
            <p>{piece.description}</p>            
          </div>
        ))
      }
    </div>
  );
  
};

export default Parts;