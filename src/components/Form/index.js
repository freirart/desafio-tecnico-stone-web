import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Input';

import api from '../../services/api';

import './styles.css';

function Form({ type, objRef, objName }) {

  const [ cargosList, setCargosList ] = useState([]);
  let keys = ['nome'];
  
  const history = useHistory();

  if (objName === 'employee') {
    keys.push('idade');
    keys.push('cargo')
  }

  useEffect(() => {
    api.get('/cargos')
      .then(({ data }) => setCargosList(data.cargos))
      .catch(err => console.log(err));
  }, [])

  const [ nome, setNome ] = useState(objRef?.nome || '');
  const [ idade, setIdade ] = useState(objRef?.idade || 0);
  const [ cargoId, setCargoId ] = useState(objRef?.cargo?.id || '');

  let fakeCargos = [
    {
      "id": 6,
      "nome": "Desenvolvedor Fullstack"
    },
    {
      "id": 8,
      "nome": "Chapter Lead"
    },
    {
      "id": 9,
      "nome": "Desenvolvedor Python"
    },
    {
      "id": 11,
      "nome": "Desenvolvedor C/C++"
    },
    {
      "id": 12,
      "nome": "Faxineira"
    },
    {
      "id": 13,
      "nome": "Segurança"
    },
    {
      "id": 14,
      "nome": "Estagiário Front-End React"
    },
    {
      "id": 15,
      "nome": "Estagiário Back-End NodeJS"
    }
  ];

  function handleAddEmployee(e) {
    e.preventDefault();

    const url = idade > 0 ? '/employee' : '/cargos'

    api.post(url, {nome, idade, cargoId})
      .then(() => {
        alert('Success adding employee!');
        history.push('/');
      })
      .catch(err => alert('Erro ao cadastrar!'));
  }

  return (
    <form id="form-component" onSubmit={handleAddEmployee}>
      {keys.map(key => {
        return (
          <div id="input-group" key={key}>
            {key === 'nome' && (
              <Input 
                type="text"
                name="nome"
                valueSt={nome}
                onChangeSt={e => setNome(e.target.value)}
                placeholder="Nome do funcionário"
              />
            )}
            {key === 'idade' && (
              <Input 
                type="number"
                name="idade"
                valueSt={idade}
                onChangeSt={e => setIdade(e.target.value)}
                placeholder="Idade do funcionário"
                max="80"
                min="14"
              />
            )}
            {key === 'cargo' && (
              <Input 
                type="select"
                name="cargo"
                objRef={cargosList}
                valueSt={cargoId}
                onChangeSt={e => setCargoId(e.target.value)}
                placeholder="Cargo do Funcionário"
              />
            )}
          </div>
        );
      })}
      <button type="submit">
        <i className="fas fa-plus-circle"></i> Cadastrar Funcionário
      </button>
    </form>
  );
}

export default Form;