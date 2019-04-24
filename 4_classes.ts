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
      print('Wiadomość utworzona: ', this.date.toDateString())
    }
  }

  class Message extends TimeMessage implements Response {
    info: string;
    constructor(text: string) {
      super();

      this.info = text;
    }

    response(): string {
      return 'Dziękuję za wiadomość';
    }
  }

  const msg = new Message('Hello World');
  print(msg.info)
  print(msg.created())
  print(msg.response())
}