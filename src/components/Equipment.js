import '../styles/Equipment.css';
import { useState, useEffect } from 'react';

function Equipment() {

  const [equipList, setEquipList] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/equipment`)
      .then(initRes => {
        initRes.json().then(equip_list => {
          setEquipList(equip_list)
        });
      });
  }, []);

  return (
    <div className='equipment'>
      {
        equipList &&
        equipList.map(piece => (
          <div key={piece._id} className='equipment-piece'>
            <p>{piece.manufacturer}</p>
            <p>{piece.model}</p>
            <p>{piece.serial}</p>
            <p>{piece.name}</p>
            <p>{piece.type}</p>
            {
              piece.parts.map(part => (
                <div>{part.description}</div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
  
};

export default Equipment;

// This might be home page - just a list of all pieces of equipment