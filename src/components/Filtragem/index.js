import React, { useState } from 'react';

import Input from '../Input';

import './styles.css';

function Filtragem({ keyRef }) {

  const keys = Object.keys(keyRef[0]);
  const [ isHidden, setIsHidden ] = useState(true);
  keys.shift();

  function showFiltros() {
    setIsHidden(!isHidden);
  }

  return (
    <form>
      <button type="button" onClick={showFiltros}>
        Filtros
        <i class="fas fa-chevron-down" />
      </button>
      <table id="table-filtros" className={ isHidden ? 'hidden' : '' }>
        <tr>
        {keys.forEach(key => <td><Input name={key} /></td>)}
        </tr>
      </table>
    </form>
  );
}

export default Filtragem;