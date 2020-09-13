import initialState from './initialState';
  
function addReducer(state = initialState, {type, data}) {
  switch(type) {
    case 'GET_PLAYER_LIST_REQUEST':
      return { ...state };
    case 'GET_PLAYER_LIST_RESPONSE':
      return { 
        ...state, 
        playerList: data
      };
    case 'INCREMENT_SCORE':
      return {
        ...state, 
        score: state.score + 1,
        showFppg: true
      }
    case 'INCREMENT_TURN':
      return {
        ...state, 
        turn: state.turn + 1,
        showFppg: true
      }
    case 'HIDE_FPPG':
      return {
        ...state,
        showFppg: false
      }
    case 'RESET_GAME':
      return {
        ...initialState
      }
    default:
      return state;
  }
}

export default addReducer;
  