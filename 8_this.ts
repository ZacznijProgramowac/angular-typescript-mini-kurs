import print from './index';

export default function thisExamples() {

  class Animal {
    name = 'Animal';

    getName(): Function {
      return this.printName;
    }
    printName = (): void => {
      print(this.name);
    }
  }

  const animal = new Animal();
  const func = animal.getName();
  func();

}