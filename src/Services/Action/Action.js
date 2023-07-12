import { ADD_DATA, EDIT_DATA, DELETE_DATA } from "../const/Constant";

export const ActionData = (value) => {
  return {
    type: ADD_DATA,
    paylod: {
      id: new Date().getTime().toString(),
      data: value
    }
  };
};

export const EditedData = (value) => {
  return {
    type: EDIT_DATA,
    paylod: value
  };
};

export const DeletData = (value) => {
  return {
    type: DELETE_DATA,
    paylod: value
  };
};
