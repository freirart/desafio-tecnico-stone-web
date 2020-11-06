import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageContainer from '../../components/PageContainer';
import Table from '../../components/Table';
import Input from '../../components/Input';

import api from '../../services/api';

import './styles.css';

function EmployeesList() {

  const [ employeesList, setEmployeesList ] = useState([]);
  const [ cargosList, setCargosList ] = useState([]);
  const keys = ['cargo', 'nome', 'idade'];
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ shouldItGet, setShouldItGet ] = useState(true);

  useEffect(getEmployees, [ pageNumber, employeesList, shouldItGet ]);

  useEffect(() => {
    api.get('/cargos')
      .then(({ data }) => setCargosList(data.cargos))
      .catch(err => console.log(err));
  }, []);

  const [ isHidden, setIsHidden ] = useState(true);
  const [ isFiltered, setIsFiltered ] = useState(false);
  const [ nome, setNome ] = useState('');
  const [ filtroIdade, setFiltroIdade ] = useState('');
  const [ cargoId, setCargoId ] = useState('');

  const filtroIdadeObj = [
    {id: 1, nome: 'Funcionários abaixo de 20 anos'},
    {id: 2, nome: 'Funcionários entre 20 e 30 anos'},
    {id: 3, nome: 'Funcionários entre 31 e 40 anos'},
    {id: 4, nome: 'Funcionários acima de 40 anos'},
  ];

  function getEmployees() {
    if (!shouldItGet) return;

    api.get(`/employee/page/${pageNumber}`)
      .then(({ data }) => {
        if (employeesList.length < 1) setEmployeesList(data.listaFuncionarios);
        else setEmployeesList([...employeesList, ...data.listaFuncionarios]);
      })
      .catch(err => console.log(err));

    setShouldItGet(false);
  }

  function showFilters() {
    setIsHidden(!isHidden);
  }

  async function handleQuerySubmit(e) {
    e.preventDefault();
    setIsFiltered(true);
    setPageNumber(0);
    const params = {nome, filtroIdade, cargoId}
    const { data } = await api.get('/employee', {params});
    setEmployeesList(data.funcionarios);
  }

  async function clearFilters() {
    setIsFiltered(false);
    hideFilters();
    employeesList.length = 0;
    setShouldItGet(true);
    if (pageNumber !== 0) setPageNumber(0);
    else getEmployees();
  }

  function hideFilters() {
    setIsHidden(true);
    setNome('');
    setFiltroIdade('');
    setCargoId('');
  }

  function increasePageNumber() {
    setShouldItGet(true);
    setPageNumber(pageNumber + 1);
  }

  return (
    <PageContainer>
      <form id="employee-list-form" onSubmit={handleQuerySubmit}>
        <div className="actions">
          <div className="post-actions">
            <Link to="/add-employee" className="add-btn">
              <i className="fas fa-plus-circle"></i> Cadastrar Funcionário
            </Link>
            <Link to="/add-cargo" className="add-btn">
            <i className="fas fa-plus-circle"></i> Cadastrar Cargo
            </Link>
          </div>
          <div className="filter-actions">
            <button 
              type="button" 
              className={`limpar-filtro ${+ isFiltered ? '' : ' hidden'}`}
              onClick={clearFilters}>
              <i className="fas fa-times" />
              Limpar Filtros
            </button>
            <button type="button" onClick={showFilters}>
              Filtros
              <i className="fas fa-chevron-down" />
            </button>
          </div>
        </div>
        <table id="table-filtros" className={ isHidden ? 'hidden' : '' }>
          <tbody className={ isHidden ? 'hidden' : '' }>
            <tr className={ isHidden ? 'hidden' : '' }>
              {keys.map(key => {
                return (
                  <td key={key}>
                   { key === 'nome' && (
                      <Input
                        label={`Por ${key}:`}
                        type="text"
                        placeholder="Filtrar pelo nome"
                        name="nome"
                        valueSt={nome}
                        onChangeSt={e => setNome(e.target.value)}
                      />
                    )}
                    { key === 'cargo' && (
                      <Input
                        label={`Por ${key}:`}
                        type="select"
                        objRef={cargosList}
                        name="cargoId"
                        valueSt={cargoId}
                        onChangeSt={e => setCargoId(e.target.value)}
                        placeholder="Filtrar pelo cargo"
                      />
                    )}
                    { key === 'idade' && (
                      <Input
                        label={`Por ${key}:`}
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
      <Table objRef={employeesList} />
      <div 
        className={`show-more ${ isFiltered || employeesList.length % 20 !== 0 ? 'hidden' : ''}`}>
        <span onClick={increasePageNumber}>Exibir mais</span>
      </div>
    </PageContainer>
  );
}

export default EmployeesList;
