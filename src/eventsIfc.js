/**
	The eventsIfc provides an interface for EventEmitter
    This allows EventEmitter to be overridden in non-NodeJs environments.
*/

import { EventEmitter } from 'events';


export class EventIfc {
    constructor (EventImpl = null) {
        this.events = null;

        if ((EventImpl === null) && (EventEmitter)) {
            EventImpl = EventEmitter;
        }

        if (EventImpl !== null) {
            this.events = new EventImpl();
        }
    }

    on (event, func) {
        if (this.events) {
            this.events.on(event, func);
        }
    }

    emit (event, data) {
        if (this.events) {
            this.events.emit(event, data);
        }
    }
}
