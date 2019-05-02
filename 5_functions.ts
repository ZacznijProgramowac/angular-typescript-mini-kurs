import print from './index';

export default function functions() {

  // najprostsza definicja funkcji
  function typVoid(): void {
    print('Hello');
  }
  typVoid();

  // funkcja z parametrem
  function typVoidParam(param: string): void {
    print(param);
  }
  typVoidParam('Hello param');
  // funkcja return
  function typVoidParamReturn(): string {
    return 'Hello from func';
  }
  const msg = typVoidParamReturn();
  print(msg);

  // funckja anonimowa
  const anonim = function (): string {
    return 'Hello from anonim';
  }
  print(anonim())

  // Arrow functions
  const funcArrow = (): void => print('Func Arrow')
  funcArrow();

  const funcArrowParam = (msg: string): void => print(msg)
  funcArrowParam('Hello param arrow');

  const funcArroReturn = (): string => {
    const msg = 'Wiadomość';
    return msg;
  }
  print(funcArroReturn())

  ///////////////

  function buildName(name: string, surname: string) {
    return 'Nazywam się ' + name + ' ' + surname;
  }
  print(buildName('Jan', 'Kowalski'));


  function buildNameOption(name: string, surname?: string) {
    return 'Nazywam się ' + name + ' ' + surname;
  }
  print(buildNameOption('Jan'));

  function buildNameDefault(name: string, surname = '') {
    return 'Nazywam się ' + name + ' ' + surname;
  }
  print(buildNameDefault('Jan', 'Kowalski'));

  function myAnimals(...animals: string[]): string{
    return 'Moja zwierzaki to: ' + animals.join(', ');
  }

  print(myAnimals('Reksio'));
}
