import EventEmitter, {  Emitter, EventListener } from 'event-emitter';

export class EventService {
  constructor(events) {
    this.events = events;
    this.emitter = EventEmitter();
  }

  subscribe(event, listener) {
    console.log(`New subscriber for event: ${event} added`);

    this.emitter.on(event, listener);
  }

  emit(event, ...args) {
    console.log(`New Event emitted: ${event}`);

    this.emitter.emit(event, ...args);
  }

  removeListener(event, listener) {
    console.log(`Removed listener for: ${event}`);

    this.emitter.off(event, listener);
  }
}
