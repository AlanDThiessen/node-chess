import { AlgebraicGameClient } from './algebraicGameClient.js';
import { SimpleGameClient } from './simpleGameClient.js';
import { UCIGameClient } from './uciGameClient.js';

let eventImpl = null;

export const create = (opts) => AlgebraicGameClient.create(opts, eventImpl);
export const createSimple = () => SimpleGameClient.create(eventImpl);
export const fromFEN = (fen, opts) => AlgebraicGameClient.fromFEN(fen, opts, eventImpl);
export const createUCI = () => UCIGameClient.create(eventImpl);

function setEventImpl (newEventImpl) {
	eventImpl = newEventImpl;
}

// exports
export default {
	create,
	createSimple,
	createUCI,
	fromFEN,
	setEventImpl
};
