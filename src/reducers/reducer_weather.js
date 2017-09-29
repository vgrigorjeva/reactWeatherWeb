import { FETCH_WEATHER } from '../actions/index'; // curly braces because it is not the default export

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // concat creates new array, push manipulates the existing state array
      return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city]]
  }
  return state;
}
