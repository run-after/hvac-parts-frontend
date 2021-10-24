import '../styles/Part.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Part() {

  const { partID } = useParams();

  const [piece, setPiece] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/parts/${partID}`)
      .then(initRes => {
        initRes.json().then(part => {
          setPiece(part);
        });
    })
  }, [partID]);

  const deletePart = () => {
    // Will need auth to allow this or not
    fetch(`${process.env.REACT_APP_API_DOMAIN}/parts/${partID}`, {
      method: 'DELETE'
    }).then(initRes => {
      initRes.json().then(part => {
        window.location = '/parts';
      });
    });
  };

  return (
    piece && 
    <div className='part'>
      <button onClick={deletePart}>Delete</button>
      <p>manufacturer: {piece.manufacturer}</p>
      <p>partNumber: {piece.partNumber}</p>
      <p>description: {piece.description}</p>
      <p>type: {piece.type}</p>
      <a href={piece.link} target='_blank' rel='noreferrer'>link to buy</a>{/* need to figure out link */}
      <ul className='unit-list'>
        {
          piece.units.map(unit => (
            <li><a href={`/equipment/${unit._id}`}>{unit.name}</a></li>
          ))
        }
      </ul>
    </div>
  );
  
};

export default Part;