import print from './index';

export default function classes() {

  interface Response {
    response(): string,
  }

  class TimeMessage {
    date: Date;
    constructor() {
      this.date = new Date();
    }

    created(): void {
      print('Wiadomość utworzona', this.date.toDateString());
    }
  }

  class Message extends TimeMessage implements Response {
    info: string;

    constructor(msg: string) {
      super();
      this.info = msg;
    }

    hello() {
      print('Hello z klasy')
    }

    response(): string {
      return 'Dziękuje za wiadomość';
    }
  }

  const msg = new Message('Hello');
  msg.hello();
  print(msg.info);
  print(msg.created());
  print(msg.response());
}