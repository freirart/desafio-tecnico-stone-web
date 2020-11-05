import React from 'react';

import './styles.css';

function Table({ objRef }) {

  let keys = Object.keys(objRef[0]);

  // hidding 'id' when displaying employees
  if (keys.length > 2) keys.shift();

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
                <td className="content-cell">{ cargo.nome }</td>
                <td className="edit-btn">
                  <a href="https"><i className="fas fa-edit"></i> Editar</a>
                </td>
                <td className="delete-btn">
                  <a href="https"><i className="fas fa-trash-alt"></i> Excluir</a>
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
                <td><a href="https">Excluir</a></td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}

export default Table;