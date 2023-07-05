import { injectable, inject } from 'inversify';
import { ServiceA } from '../services/ServiceA';

@injectable()
export class ControllerA {
  constructor(private readonly serviceA: ServiceA) {}

  public run(): void {
    this.serviceA.doSomething();
  }
}
