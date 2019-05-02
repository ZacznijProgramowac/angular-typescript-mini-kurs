import types from './1_types';
import variables from './2_variable_declaration';
import interfaces from './3_interfaces';
import classes from './4_classes';
import functions from './5_functions';
import enums from './6_enums';

// import thisExamples from './8_this';

function print(...text) {
  const appDiv = document.getElementById('app');
  const header = document.createElement('h2');
  header.innerText = text.join(' ')
  appDiv.appendChild(header);
}
export default print;


// types();
// variables();
// interfaces();
// classes();
// functions();
// enums();
// thisExamples();