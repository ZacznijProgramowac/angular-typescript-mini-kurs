import print from './index'

export default function interfaces() {

  let name: string = 'Reksio';
  let age: number = 10;

  interface Animal {
    name: string,
    age: number,
    readonly owner: string,
  }

  const dog: Animal = {name: 'Reksio', age: 10, owner: 'Ktoś'};
  dog.age = 12;

  function printAnimal(a: Animal){
    print(a.name);
    print(a.age);
  }
  printAnimal(dog);

  const x ={
    'name': 'Opel',
    'model': 'Corsa'
  };

  interface Car {
    name: string,
    model: string,
  }
   const car: Car = x;

  function printCar(c: Car){
     print(c.name);
   }
   printCar(car)

}