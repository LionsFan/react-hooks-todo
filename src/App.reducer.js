const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state.push({text: action.payload})
      return state;
    case 'REMOVE_TODO':
      return state.slice(0, action.payload).concat(state.slice(action.payload + 1))
    case 'MOVE_UP':
      if (action.payload > 0) {
        let move = state[action.payload];
        state[action.payload] = state[action.payload-1];
        state[action.payload-1] = move;
      }
      return state;
    case 'MOVE_DOWN':
      if (action.payload < state.length - 1) {
        let move = state[action.payload];
        state[action.payload] = state[action.payload+1];
        state[action.payload+1] = move;
      }
      return state;
    default:
      return state
  }
}

export default appReducer;
