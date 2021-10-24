import '../styles/form.css';
import { useState } from 'react';

function EquipmentForm() {

  const [errorMessage, setErrorMessage] = useState(null);

  const createEquipment = (e) => {
    // will need to set up AUTH in order to complete this
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_DOMAIN}/equipment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': e.target.name.value,
        'manufacturer': e.target.manufacturer.value,
        'model': e.target.model.value,
        'serial': e.target.serial.value,
        'type': e.target.type.value
      })
    }).then(initRes => {
      console.log(initRes)
      initRes.json().then(res => {
        if (res.message) {
          // if message is string - network error
          if (typeof res.message === 'string') {
            setErrorMessage([res.message])
          } else {
            setErrorMessage(res.message)  
          };
        } else {
          // handle good to go
          window.location = '/equipment';
        }
      });
    });
  };

  return (
    <div className='form-container'>
      {
        errorMessage &&
        errorMessage.map(msg => (
          <p key={msg} className='error'>{msg}</p>
        ))
      }
      <form onSubmit={createEquipment} className='form'>
        <input name='name' placeholder='name'/>
        <input name='manufacturer' placeholder='manufacturer' />
        <input name='model' placeholder='model' />
        <input name='serial' placeholder='serial' />
        <input name='type' placeholder='type' />
        <button>Create</button>
      </form>
    </div>
  );
  
};

export default EquipmentForm;