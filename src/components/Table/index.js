import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Table({ objRef, errors }) {

  if (errors.length) {
    return (<p style={{ margin: 3 + 'rem' }}>Não foram encontrados dados.</p>);
  }

  if (!objRef.length) return "Carregando dados...";

  let keys = Object.keys(objRef[0]);

  // hidding 'id' when displaying employees
  if (keys.length > 2) keys.shift();

  // console.log(objRef);

  return (
    <table id="main-table">
      <thead>
        <tr>
        {
          keys.map(key => <td key={key}>{key}</td>)
        }
        </tr>
      </thead>
      <tbody>
        {keys.includes('idade') && (
          objRef.map(({ id, nome, idade, cargo }) => {
            return (
              <tr key={id} data-id={id}>
                <td className="content-cell">{ nome }</td>
                <td className="content-cell" style={{ textAlign: 'center' }}>{ idade }</td>
                <td className="content-cell">{ cargo?.nome }</td>
                <td className="edit-btn">
                  <Link to={`/update-employee/?id=${id}`}>
                    <i className="fas fa-edit"></i> Editar
                  </Link>
                </td>
                <td className="delete-btn">
                  <Link to={`/delete-employee/?id=${id}`}>
                    <i className="fas fa-trash-alt"></i> Excluir
                  </Link>
                </td>
              </tr>
            );
          })
        )}
        {!keys.includes('idade') && (
          objRef.map(({ id, nome }) => {
            return (
              <tr key={id}>
                <td>{ id }</td>
                <td>{ nome }</td>
                <td><Link to={`/delete-employee/?id=${id}`}>Excluir</Link></td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}

export default Table;