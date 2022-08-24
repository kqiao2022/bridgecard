import { EVENT_CREATE } from "../ActionTypes";

const event = (state = {}, action) => {
 
  switch (action.type) {
    case EVENT_CREATE:
      return action.data;
    default:
      return state;
  }
};
export default event;
