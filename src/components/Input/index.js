import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css';

function Input({ name }) {

  const [ cargos, setCargos ] = useState([]);

  function getCargos() {
    api.get('/cargos')
      .then(({ data }) => setCargos(data.cargos))
      .catch(err => console.log(err));
  }

  return (
    <div className="input-group">
      <label for={name}>{ name }</label>
      { name === 'nome' && (
        <input id={name} type="text" name="nome" placeholder="Buscar pelo nome do funcionário" />
      )}
      { name === 'cargo' && (
        <select id={name} name="cargoId">
          <option selected value="">Buscar pelo cargo</option>
          {getCargos()}
          {cargos.map(({ id, nome }) => <option value={id}>{ nome }</option>)}
        </select>
      )}
      { name === 'idade' && (
        <select id={name} name="filtroIdade">
          <option value="" selected>Buscar por idade</option>
          <option value="1">Funcionários abaixo de 20 anos</option>
          <option value="2">Funcionários entre 20 e 30 anos</option>
          <option value="3">Funcionários entre 31 e 40 anos</option>
          <option value="4">Funcionários acima de 40 anos</option>
        </select>
      )}
    </div>
  );
}

export default Input;