import '../styles/EquipmentPiece.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

function EquipmentPiece() {

  const { equipmentID } = useParams();

  const [piece, setPiece] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/equipment/${equipmentID}`)
      .then(initRes => {
        initRes.json().then(piece => {
          setPiece(piece);
        });
      });
  }, [equipmentID]);

  const deletePiece = () => {
    // Will need auth to allow this or not
    fetch(`${process.env.REACT_APP_API_DOMAIN}/equipment/${equipmentID}`, {
      method: 'DELETE'
    }).then(initRes => {
      initRes.json().then(equip => {
        window.location = '/equipment';
      })
    })
  };

  return (
    <div className='equipment-piece-wrapper'>
      {
        piece &&
        <div className='equipment-piece'>
          <button onClick={deletePiece}>Delete</button>
          <h1>{piece.name}</h1>
          <p>Model: {piece.model}</p>
          <p>Serial: {piece.serial}</p>
          <p>Type: {piece.type}</p>
          <div className='parts'>
            {
              piece.parts.map(part => (
                <p>{part.partNumber}</p>
              ))
            }
          </div>
          
        </div>
      }
    </div>
  );
  
};

export default EquipmentPiece;