import print from './index'

export default function interfaces() {
  interface Animal {
    name: string,
    age: number,
    readonly type: string,
    owner?: string,
  }
  // inicjalizacja obiektu typu Animal
  const a: Animal = { name: 'Reksio', age: 8, type: 'Dog' }

  // metoda wykorzystująca obiekt animal
  function printAnimal(a: Animal) {
    print(a.name)
    print(a.age)
    print(a.type)
  }
  printAnimal(a)

// najczęściej interfejsy będziemy wykorzystywać to reprezentacji jsonów, 
// można je bezproblemu zmapować
  const x = {
    "name": "Opel",
    "model": "Corsa",
    "color": 'red',
  }
  interface Car {
    name: string,
    model: string,
    color: string,
  }
  function printCar(car: Car) {
    print(car);
    console.log(car);
  }
  printCar(x as Car);
}