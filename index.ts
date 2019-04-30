import types from './1_types';
import variables from './2_variable_declaration';

function print(...text) {
  const appDiv = document.getElementById('app');
  const header = document.createElement('h2');
  header.innerText = text.join(' ')
  appDiv.appendChild(header);
}
export default print;


// types();
variables();
