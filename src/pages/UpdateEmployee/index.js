import React, { useState, useEffect } from 'react';

import Form from '../../components/Form';
import PageContainer from '../../components/PageContainer';

import api from '../../services/api';

function UpdateEmployee() {

  const id = new URLSearchParams(window.location.search).get('id');
  const [ objRef, setObjRef ] = useState({});

  useEffect(() => {
    api.get(`/employee/${id}`)
      .then(({ data }) => setObjRef(data.funcionario))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <PageContainer>
      <Form objRef={objRef} objName="funcionário" type="update" />
    </PageContainer>
  );
}

export default UpdateEmployee;
