import print from './index';

export default function types() {

  // boolean
  let isDone: boolean = false; //true
  print(isDone);

  // number
  let decimal: number = 15;
  let float: number = 3.14;
  let binary: number =  0b1010;
  print(decimal, float, binary);

  // string
  let title: string = 'JavaScript';
  title = "TypeScript";
  let sentence: string = `Uczymy się ${title}`;
  print(sentence);

  // Array 
  let days: number[] = [1, 2, 3, 4]
  print(days)
  let weekdays: Array<string> = ['Poniedziałek', 'Wtorek'];
  print(weekdays);

  // Tuple
  let dayNumber: [string, number] = ['Poniedziałek', 1];

  // Any
  let something: any = 3.14;
  something = 'Coś';
  something = null;
  something = [1, 'Coś', null,  {}];

  // Void
  function say(): void {
    print('Hello');
  }
  say();

  // null undefined
  let emptyNumber: null | number = null;
  let emptyString: undefined = undefined;

  // UNION TYPE
  let day: string | number | null = 2.99;


  // TYPE INFERENCE and typeof
  print('Jaki to typ: ', typeof day === 'number')

  let test = 'Cośtam';
  print('Jaki to typ: ', typeof day === 'string')

}