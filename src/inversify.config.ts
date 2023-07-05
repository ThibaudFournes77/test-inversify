import 'reflect-metadata';
import { Container } from 'inversify';
import { ControllerA } from './controllers/ControllerA';
import { ServiceA } from './services/ServiceA';
import { ServiceB } from './services/ServiceB';
import { IServiceB } from './services/interfaces/ServiceB.interface';
import { IServiceA } from './services/interfaces/ServiceA.interface';

const container = new Container();
container.bind<ControllerA>(ControllerA).toSelf();
container.bind<IServiceA>(ServiceA).toSelf();
container.bind<IServiceB>(ServiceB).toSelf();

export default container;
