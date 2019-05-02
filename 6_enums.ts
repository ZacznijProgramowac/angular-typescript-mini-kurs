import print from './index';

export default function enums() {

  const up = 'góra';
  const down = 'dół';

  enum Direction {
    Up, Down, Left, Right
  }

  function move(direction: Direction): void {
    if (direction === Direction.Up) {
      print('Kierunek góra', direction)
    } else if (direction === Direction.Down) {
      print('Kierunek dół')
    }
  }

  move(Direction.Up)

  enum Days {
    monday = 'poniedziałek',
    tuesday = 'wtorek'
  }

  function hello(day: Days) {
    print('Dzisiaj jest ', day);
  }

  hello(Days.monday)

} 