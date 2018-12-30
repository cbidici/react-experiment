import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return action.payload.reduce(
        (obj, item) => ({ ...obj, ...{ [item["id"]]: item } }),
        {}
      );
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      let newState = { ...state };
      delete newState[action.payload];
      return newState;
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
