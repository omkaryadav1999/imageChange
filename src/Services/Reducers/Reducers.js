import { ADD_DATA, EDIT_DATA, DELETE_DATA } from "../const/Constant";

const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      console.log(state);
      return [...state, action.paylod];
    case EDIT_DATA:
      const edit = state.map((item) => {
        return item.id === action.paylod.postId.id
          ? {
              ...item,
              data: {
                Title: action.paylod.data.Title,
                image: action.paylod.data.image
              }
            }
          : item;
      });
      return edit;
    case DELETE_DATA:
      return state.filter((item) => {
        return item.id !== action.paylod;
      });
    default:
      return state;
  }
};

export default Reducer;
