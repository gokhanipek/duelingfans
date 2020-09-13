export const GET_PLAYER_LIST_REQUEST = "GET_PLAYER_LIST_REQUEST";
export const GET_PLAYER_LIST_RESPONSE = "GET_PLAYER_LIST_RESPONSE";
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const INCREMENT_TURN = 'INCREMENT_TURN';
export const HIDE_FPPG = 'HIDE_FPPG';
export const RESET_GAME = 'RESET_GAME';

export const getPlayerListRequest = () => ({ type: GET_PLAYER_LIST_REQUEST });
export const getPlayerListResponse = data => ({ type: GET_PLAYER_LIST_RESPONSE, data });

export const incrementScore = () => ({ type: INCREMENT_SCORE });
export const incrementTurn = () => ({ type: INCREMENT_TURN });

export const hideFppg = () => ({ type: HIDE_FPPG});
export const resetGame = () => ({type: RESET_GAME});