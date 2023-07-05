import { IServiceB } from "./services/interfaces/ServiceB.interface";

interface Message {
  id: number;
  content: string;
}

export class MockServiceB implements IServiceB {
  // private messages: Message[] = [];

  getHello() {
    return 'Hello';
  }

  // public sayHello(): void {
  //   console.log('hello world');
  // }

  // public getById(id: number): Message | undefined {
  //   return this.messages.find((message) => message.id === id);
  // }

  // public create(content: string): Message {
  //   const id = this.messages.length + 1;
  //   const newMessage: Message = { id, content };
  //   this.messages.push(newMessage);
  //   return newMessage;
  // }

  // public getAll(): Message[] {
  //   return this.messages;
  // }
}
