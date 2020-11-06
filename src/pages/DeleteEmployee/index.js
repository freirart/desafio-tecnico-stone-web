import React, { useEffect, useState }  from 'react';

import PageContainer from '../../components/PageContainer';
import ConfirmBox from '../../components/ConfirmBox';

import api from '../../services/api';

function DeleteEmployee() {
  
  const id = new URLSearchParams(window.location.search).get('id');
  const [ objRef, setObjRef ] = useState({
    id: '', nome: '', cargo: { id: '', nome: '' }
  });

  useEffect(() => {
    api.get(`/employee/${id}`)
      .then(({ data }) => setObjRef(data.funcionario))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <PageContainer>
      {objRef.nome && (<ConfirmBox objRef={objRef} objName="funcionário" />)}
    </PageContainer>
  );
}

export default DeleteEmployee;
