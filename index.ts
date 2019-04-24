import types from './1_types';
import variables from './2_variable_declaration';
import interfaces from './3_interfaces';

function print(...text) {
  const appDiv = document.getElementById('app');
  const header = document.createElement('h2');
  header.innerText = text.join(' ')
  appDiv.appendChild(header);
}
export default print;

//types();
// variables();
interfaces();