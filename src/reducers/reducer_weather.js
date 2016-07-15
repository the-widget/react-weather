import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }
  return state;
}

// if we used
// `state.push(action.payload.data)`
// We would get an error
// NEVER manipulate state, you MUST return a new fresh state object. 