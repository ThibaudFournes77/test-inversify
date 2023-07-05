
import 'reflect-metadata';
import { injectable } from 'inversify';
import { IServiceB } from './interfaces/ServiceB.interface';

interface Message {
  id: number;
  content: string;
}

@injectable()
export class ServiceB implements IServiceB {
  // private messages: Message[] = [];

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

  public getHello(): string {
    return 'Hello';
  }

  // public sayHello(): void {
  //   console.log('hello world');
  // }
}