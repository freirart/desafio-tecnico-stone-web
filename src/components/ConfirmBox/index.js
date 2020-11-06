import React from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function ConfirmBox({ objRef, objName }) {

  const keys = Object.keys(objRef);
  const history = useHistory();

  function handleDelete() {
    const url = `/employee/delete/${objRef.id}`;
    api.delete(url)
      .then(() => {
        return Promise.resolve(alert(`Success removing ${objName}!`));
      })
      .then(() => history.push('/'))
      .catch(err => alert("Erro ao deletar funcionário!"));
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
        <button type="button" onClick={handleDelete}>
          <i className="fas fa-check" /> Confirmar
        </button>
        <button type="button">
          <i className="fas fa-times" /> Cancelar
        </button>
      </div>
    </section>
  );
}

export default ConfirmBox;