

export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';
// const data_Home=[{weather:'nang'}];

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});


export const delItem = (name) => ({
  type: DEL_ITEM,
  payload:{name:name,} 
});









