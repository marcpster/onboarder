// Use the event emitter to consume custom events across
// the application and respond to them in components 
import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

export default eventEmitter;