import React from 'react';

import PageContainer from '../../components/PageContainer';
import Form from '../../components/Form';

function AddCargo() {

  const objRef = { id: '', nome: '' };

  return (
    <PageContainer>
      <Form objRef={objRef} objName="cargo" type="create" />
    </PageContainer>
  );
}

export default AddCargo;
