import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../../components/PageContainer';
import Table from '../../components/Table';
import Input from '../../components/Input';

import api from '../../services/api';

import './styles.css';

function EmployeesList() {

  // const [ employeesList, setEmployeesList ] = useState([]);
  // const [ cargosList, setCargosList ] = useState([]);
  const keys = ['cargo', 'nome', 'idade'];
  // const [ pageNumber, setPageNumber ] = useState(0);

  const fakeEmployees = [
    {
      "id": 1,
      "nome": "Artur Freire",
      "idade": 19,
      "cargo": {
        "id": 6,
        "nome": "Desenvolvedor Fullstack"
      }
    },
    {
      "id": 2,
      "nome": "Bruno Rogério",
      "idade": 18,
      "cargo": {
        "id": 8,
        "nome": "Chapter Lead"
      }
    },
    {
      "id": 4,
      "nome": "Ciro Trindade",
      "idade": 45,
      "cargo": {
        "id": 9,
        "nome": "Desenvolvedor Python"
      }
    },
    {
      "id": 5,
      "nome": "Thiago Ferauche",
      "idade": 50,
      "cargo": {
        "id": 9,
        "nome": "Desenvolvedor Python"
      }
    },
    {
      "id": 3,
      "nome": "Lucas Anjos",
      "idade": 31,
      "cargo": {
        "id": 9,
        "nome": "Desenvolvedor Python"
      }
    },
    {
      "id": 7,
      "nome": "André Freire",
      "idade": 29,
      "cargo": {
        "id": 13,
        "nome": "Segurança"
      }
    },
    {
      "id": 9,
      "nome": "Emília Freire",
      "idade": 42,
      "cargo": {
        "id": 12,
        "nome": "Faxineira"
      }
    },
    {
      "id": 10,
      "nome": "Thiago Rodrigues",
      "idade": 19,
      "cargo": {
        "id": 15,
        "nome": "Estagiário Back-End NodeJS"
      }
    },
    {
      "id": 11,
      "nome": "Luis Gustavo",
      "idade": 19,
      "cargo": {
        "id": 14,
        "nome": "Estagiário Front-End React"
      }
    }
  ];

  const fakeCargos = [
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

  // useEffect(() => {
  //   api.get(`/employee/page/${pageNumber}`)
  //     .then(({ data }) => {
  //       if (!employeesList.length) setEmployeesList(data.listaFuncionarios);
  //       else {
  //         data.listaFuncionarios.forEach(func => employeesList.push(func))
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }, [ pageNumber ]);

  // useEffect(() => {
  //   api.get('/cargos')
  //     .then(({ data }) => setCargosList(data.cargos))
  //     .catch(err => console.log(err));
  // }, []);

  const [ isHidden, setIsHidden ] = useState(true);
  const [ nome, setNome ] = useState('');
  const [ filtroIdade, setFiltroIdade ] = useState('');
  const [ cargoId, setCargoId ] = useState('');

  const filtroIdadeObj = [
    {id: 1, nome: 'Funcionários abaixo de 20 anos'},
    {id: 2, nome: 'Funcionários entre 20 e 30 anos'},
    {id: 3, nome: 'Funcionários entre 31 e 40 anos'},
    {id: 4, nome: 'Funcionários acima de 40 anos'},
  ];

  function showFilters() {
    setIsHidden(!isHidden);
  }

  function handleQuerySubmit(e) {
    e.preventDefault();

    // get '/employee'
  }

  return (
    <PageContainer>
      <form onSubmit={handleQuerySubmit}>
        <div className="actions">
          <Link to="/add-employee" className="add-btn">
            <i className="fas fa-plus-circle"></i> Cadastrar Funcionário
          </Link>
          <button type="button" onClick={showFilters}>
            Filtros
            <i className="fas fa-chevron-down" />
          </button>
        </div>
        <table id="table-filtros" className={ isHidden ? 'hidden' : '' }>
          <tbody className={ isHidden ? 'hidden' : '' }>
            <tr className={ isHidden ? 'hidden' : '' }>
              {keys.map(key => {
                return (
                  <td key={key}>
                   { key === 'nome' && (
                      <Input
                        type="text"
                        placeholder="Filtrar pelo nome"
                        name="nome"
                        valueSt={nome}
                        onChangeSt={e => setNome(e.target.value)}
                      />
                    )}
                    { key === 'cargo' && (
                      <Input
                        type="select"
                        objRef={fakeCargos}
                        name="cargoId"
                        valueSt={cargoId}
                        onChangeSt={e => setCargoId(e.target.value)}
                        placeholder="Filtrar pelo cargo"
                      />
                    )}
                    { key === 'idade' && (
                      <Input
                        type="select"
                        objRef={filtroIdadeObj}
                        name="filtroIdade"
                        valueSt={filtroIdade}
                        onChangeSt={e => setFiltroIdade(e.target.value)}
                        placeholder="Filtrar pela idade"
                      />
                    )}
                  </td>
                );
              })}
              <td key="filtrar">
                <button type="submit">
                  <i className="fas fa-filter"></i>
                  Aplicar Filtro(s)
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Table objRef={fakeEmployees} />
    </PageContainer>
  );
}

export default EmployeesList;
