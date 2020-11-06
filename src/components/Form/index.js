import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../Input';

import api from '../../services/api';

import './styles.css';

function Form({ objRef, objName, type }) {

  const [ cargosList, setCargosList ] = useState([]);
  const history = useHistory();

  let keys = ['nome'];

  if (objName === 'funcionário') {
    keys.push('idade');
    keys.push('cargo')
  }

  useEffect(() => {
    if (keys.includes('cargo')) {
      api.get('/cargos')
        .then(({ data }) => setCargosList(data.cargos))
        .catch(err => console.log(err));
    }
  }, []);
  
  const [ nome, setNome ] = useState(objRef.nome);
  const [ idade, setIdade ] = useState(objRef?.idade);
  const [ cargoId, setCargoId ] = useState(objRef?.cargoId);

  if (!nome) return `Getting ${objName}...`;

  function handleAddEmployee(e) {
    e.preventDefault();
    
    let url = idade > 0 ? '/employee' : '/cargos'
    url += type === 'update' ? '/edit' : '' ;

    if (type === 'create') {
      api.post(url, {nome, idade, cargoId})
        .then(() => {
          alert(`Success adding ${objName}!`);
          history.push('/');
        })
        .catch(() => alert('Erro ao cadastrar!'));
    } else {
      api.put(url, {id: objRef.id, nome, idade, cargoId})
        .then(() => {
          alert(`${objName}'s information updated!`);
          history.push('/');
        })
        .catch(() => alert('Erro ao atualizar informações!'));
    }
  }

  return (
    <form id="form-component" onSubmit={handleAddEmployee}>
      {keys.map(key => {
        return (
          <div id="input-group" key={key}>
            {key === 'nome' && (
              <Input
                label={`${key}: `}
                type="text"
                name="nome"
                valueSt={nome}
                onChangeSt={e => setNome(e.target.value)}
                placeholder={`Nome do ${objName}`}
              />
            )}
            {key === 'idade' && (
              <Input
                label={`${key}: `}
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
                label={`${key}: `}
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
        <i className="fas fa-plus-circle"></i> {`${type} ${objName}`}
      </button>
    </form>
  );
}

export default Form;