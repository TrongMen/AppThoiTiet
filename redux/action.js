

export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';
// const data_Home=[{weather:'nang'}];

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});


export const delItem = (itemId) => ({
  type: DEL_ITEM,
  payload: itemId,
});


  // export const addCP = (item) => {
  //   return async (dispatch) => {
  //     try {
  //       const response = await axios.post(`https://api.weatherapi.com/v1/forecast.json?key=5ce75f05e28643d1965152042232011&q=${country}&days=7&aqi=no&alerts=no`, item);
  //       dispatch(addComponent(response.data));
  //     } catch (error) {
  //       console.error('Lỗi', error);
  //     }
  //   };
  // };

  // export const deleteCP = (itemId) => {
  //   return async (dispatch) => {
  //     try {
  //       await axios.delete(`${API_URL}/${itemId}`);
  //       dispatch(deleteComponent(itemId));
  //     } catch (error) {
  //       console.error('Lỗi:', error);
  //     }
  //   };
  // };







// export let Add =()=>({type:'create'})
// export let Del =()=>({type:'delete'})