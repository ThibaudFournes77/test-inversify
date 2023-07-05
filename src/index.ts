import 'reflect-metadata';
import { Container } from 'inversify';
import container from './inversify.config';
import { ControllerA } from './controllers/ControllerA';

const app = container.get<ControllerA>(ControllerA);
app.run();
