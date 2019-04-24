import print from './index';

export default function types() {

  // boolean
  let isClose: boolean = false;
  print('Bolean: ', isClose);

  // number
  let decimal: number = 15;
  let float: number = 3.14;
  let binary: number = 0b1010;
  print('Numbers: ', decimal, float, binary)

  // string
  let title: string = 'JavaScript';
  title = "TypeScript";
  let sentence: string = `Uczymy się ${title}`;
  print('String: ', sentence);

  // Array 
  let days: number[] = [1, 2, 3, 4, 5, 6, 7];
  let weekdays: Array<string> = ['Poniedziałek', 'Wtorek']
  print('Array: ', weekdays)
  
  // Tuple
  let dayNumber: [string, number] = ['Poniedziałek', 1];
  let calendar: Array<[string, number]> = [['Poniedziałek', 1], ['Wtorek', 2]];
  print('Tuple: ', calendar)

  // Any
  let something: any = 3.14;
  something = 'Cośtam';
  something = calendar;
  something = [1, 'coś', calendar, {}, null];
  print('any: ', something);

  // Void
  function say(): void {
    print('Hello')
  }
  say();

  // null undefined
  let emptyNumber: number = null;
  let emptyString: string = null;
  let emptyVariable;
  print('undefined: ', emptyString)

  // UNION TYPE
  let day: string | number = 1;
  day = 'Poniedziałek';
  print('day to typ string? ', typeof day === 'string');
  print('day to typ number? ', typeof day === 'number');

  // TYPE INFERENCE and typeof
  let language = 'TypeScript';
  print('Czy to string? ', typeof language === 'string');
}