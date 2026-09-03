import { AlgebraicGameClient } from './algebraicGameClient.js';
import { SimpleGameClient } from './simpleGameClient.js';
import { UCIGameClient } from './uciGameClient.js';

export const create = (opts, eventImpl = null) => AlgebraicGameClient.create(opts, eventImpl);
export const createSimple = (eventImpl = null) => SimpleGameClient.create(eventImpl);
export const fromFEN = (fen, opts, eventImpl = null) => AlgebraicGameClient.fromFEN(fen, opts, eventImpl);
export const createUCI = (eventImpl = null) => UCIGameClient.create(eventImpl);

// exports
export default {
	create,
	createSimple,
	createUCI,
	fromFEN
};
