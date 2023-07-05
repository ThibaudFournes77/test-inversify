import { Container } from "inversify";
import { ServiceA } from "./services/ServiceA";
import { ServiceB } from "./services/ServiceB";
import { MockServiceB } from './mock-serviceB'

describe('Testing ServiceA', () => { 
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.bind<ServiceA>(ServiceA).toSelf();
    container.bind<ServiceB>(ServiceB).toSelf();
  });
  test('getHello should return Hello', () => {
    const serviceA = container.get<ServiceA>(ServiceA);

    const hello = serviceA.getHello();

    // const serviceA = new ServiceA(new MockServiceB());

    // const hello = serviceA.getHello();

    expect(hello).toEqual('Helloo');
  });
});
