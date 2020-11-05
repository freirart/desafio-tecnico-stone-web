import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import PageContainer from '../../components/PageContainer';
import Table from '../../components/Table';
// import Filtragem from '../../components/Filtragem';

import api from '../../services/api';

function EmployeesList() {

  // const [ employeesList, setEmployeesList ] = useState([]);
  // const [ cargosList, setCargosList ] = useState([]);
  // let pageNumber = 0;

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
  //     .then(({ data }) => setEmployeesList(data.listaFuncionarios))
  //     .catch(err => console.log(err));
  // }, [pageNumber]);

  // useEffect(() => {
  //   api.get('/cargos')
  //     .then(({ data }) => setCargosList(data.cargos))
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <PageContainer>
      <Table objRef={fakeEmployees} />
      {/* <Filtragem keyRef={fakeCargos}/> */}
    </PageContainer>
  );
}

export default EmployeesList;
