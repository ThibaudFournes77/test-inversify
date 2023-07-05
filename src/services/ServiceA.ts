import { injectable, inject } from 'inversify';
import { ServiceB } from './ServiceB';
import { IServiceA } from './interfaces/ServiceA.interface';

@injectable()
export class ServiceA implements IServiceA {
  constructor(@inject(ServiceB) private readonly serviceB: ServiceB) {}

  // getById(id: number) {
  //   return this.serviceB.getById(id);
  // }

  // getAll() {
  //   return this.serviceB.getAll();
  // }

  // create(message: string) {
  //   this.serviceB.create(message);
  // }

  public getHello(): string {
    return this.serviceB.getHello();
  }

  // public doSomething(): void {
  //   this.serviceB.sayHello();
  // }
}
