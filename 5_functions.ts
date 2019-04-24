import print from './index';

export default function functions() {
  // najprostsza definicja funkcji
  function printVoid(): void {
    print('Funkcja printVoid()!');
  }

  // funkcja z parametrem
  function printParam(msg: string): void {
    print('Funkcja paprintParamram(): ' + msg);
  }

  // funkcja return
  function printReturn(msg: string): string {
    return 'Funkcja printReturn(): ' + msg;
  }

  // funckja anonimowa
  const funcAnonim = function (msg: string): string {
    return 'Funkcja fucnAnonim(): ' + msg;
  }
  printVoid();
  printParam('test');
  print(printReturn('Wiadomość zwrócona'));
  print(funcAnonim('Wiadomość zwrócona'));

  /////////////////////////// Arrow functions ////////////////////////////////
  // zapis arrow
  const printArrow = (): void => print('Arrow function!');
  
  const printArrowParam = (msg: string): void => print('Arrow function z parametrem: ' + msg);

  const printArrowReturn = (msg: string): string => 'Arrow function z return: ' + msg; // nie używamy return

  const printArrowReturnBrackets = (msg: string): string => {
    msg = 'Wiadomość nadpisana';
    return msg;
  }

  printArrow();
  printArrowParam('Hello');
  print(printArrowReturn('Hello'));
  print(printArrowReturnBrackets('Hello'));

  // parametr opcjonalny

  function buildName(name: string, surname: string) {
    return 'Nazywam się ' + name + ' ' + surname;
  }
  print(buildName('Jan', 'Kowalski'));
  // buildName('Jan') - brakuje jednego parametru

  function buildNameOptional(name: string, surname?: string) {
    return 'Nazywam się ' + name + ' ' + surname;
  }
  print(buildNameOptional('Jan'));

  function buildNameDefault(name: string, surname = '') {
    return 'Nazywam się ' + name + ' ' + surname;
  }
  print(buildNameDefault('Jan'));

  function myAnimals(...animals: string[]) {
    return 'Moje zwierzaki to: ' + animals.join(', ');
  }
  print(myAnimals('Reksio', 'Pluto', 'Łatek'));
}






















