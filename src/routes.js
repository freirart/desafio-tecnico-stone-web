import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AddCargo from './pages/AddCargo';
import AddEmployee from './pages/AddEmployee';
import DeleteEmployee from './pages/DeleteEmployee';
import EmployeesList from './pages/EmployeesList';
import UpdateEmployee from './pages/UpdateEmployee';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={EmployeesList} />
      <Route path="/add-employee" component={AddEmployee} />
      <Route path="/update-employee" component={UpdateEmployee} />
      <Route path="/delete-employee" component={DeleteEmployee} />
      <Route path="/add-cargo" component={AddCargo} />
    </BrowserRouter>
  );
}

export default Routes;