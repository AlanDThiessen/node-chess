/**
	The eventsIfc provides an interface for EventEmitter
    This allows EventEmitter to be overridden in non-NodeJs environments.
*/

import { EventEmitter } from 'events';


export class EventIfc {
    constructor (eventImpl = null) {
        this.events = null;

        if ((eventImpl === null) && (EventEmitter)) {
            eventImpl = EventEmitter;
        }

        if (eventImpl !== null) {
            this.events = new EventEmitter();
        }
    }

    on (event, func) {
        if (this.events) {
            this.events.on(event, func);
        }
    }

    emit (event, delay = null, period = null) {
        if (this.events) {
            this.events.emit(event, delay, period);
        }
    }
}
