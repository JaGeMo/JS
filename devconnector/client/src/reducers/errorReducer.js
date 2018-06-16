import { GET_ERRORS } from '../actions/types'

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return action.payload // added paylod (userData from authAction) to the state
    default:
      return state;
  }
}