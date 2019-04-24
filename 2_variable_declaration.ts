import print from './index';

export default function variables() {

  print(num2); // OK, Output: undefined 
  var num2: number = 10;

  var a = 100;
  var a = 200;

  // var widoczne jest także poza swoim blokiem
  function sayHello() {
    if (true) {
      var text = 'Hello Wolrdd';
    }
    print(text);
  }
  sayHello();

  // var dalej istnieje poza blokiem for, ma zasieg funkcyjny
  for (var i = 0; i < 10; i++) {
    print('W petli:', i);
  }
  print('Poza pętlą:', i) // i = 10, po tym skończyła się inkrementacja w pętli

  // przykład działania zmiennej 'var a' poza blokiem, 
  // zmiana na 'let' rozwiazuje problem
  function varProblem() {
    var a = 10;
    print('Deklracja var:', a) // 10
    {
      var a = 42;
      print('var w bloku:', a) // 42
    }
    print('var poza blokiem:', a) // spodziewamy się 10, a dostajemy 42 
  }
  varProblem();


  function letExample() {
    let x = 20;
    {
      let x = 30;
      print('let w bloku:', x);
    }
    print('let poza blokiem:', x);
  }
  letExample();

  const w = 100;
  // w = 90; // źle

  const x = {
    name: 'Angular'
  }
  x.name = 'Vue.js';
  // x = {
  //   name: 'React';
  // }
}