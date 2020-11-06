import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function ConfirmBox({ objRef, objName }) {

  console.log(objRef);

  const keys = Object.keys(objRef);
  const history = useHistory();

  console.log(keys);

  function handleDelete() {
    const url = `/employee/${objRef.id}`;
    api.delete(url)
      .then(() => {
        alert(`Success removing ${objName}!`);
        history.push('/');
      })
      .catch(err => console.log(err));
  }

  function redirectToMain() {
    history.push('/');
  }

  return (
    <section>
      <h1>Deseja excluir o {objName} abaixo?</h1>
      <article>
        <table>
        {keys.map(key => {
          return (
            <>
              { key !== 'cargo' && (
                <tr key={key}> <td>{key}:</td> <td>{objRef[key]}</td> </tr>
              )}
              { key === 'cargo' && (
                <tr key={key}> <td>{key}:</td> <td>{objRef[key].nome}</td> </tr>
              )}
            </>
          );
        })}
        </table>
      </article>
      <div id="btn-gp" onClick={redirectToMain}>
        <button type="button">
          <i className="fas fa-times" /> Cancelar
        </button>
        <button type="button" onClick={handleDelete}>
          <i className="fas fa-check" /> Confirmar
        </button>
      </div>
    </section>
  );
}

export default ConfirmBox;