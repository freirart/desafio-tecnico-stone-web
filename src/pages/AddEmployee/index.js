import React from 'react';

import PageContainer from '../../components/PageContainer';
import Form from '../../components/Form';

function AddEmployee() {

  const objRef = { nome: '', idade: 0, cargo: { id: '', nome: '' } };

  return (
    <PageContainer>
      <Form objRef={objRef} objName="funcionário" type="create" />
    </PageContainer>
  );
}

export default AddEmployee;
