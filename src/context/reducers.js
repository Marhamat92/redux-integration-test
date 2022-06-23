//to update the state of the application, we add here all functions that will update the state
//and we will use the dispatch function to update the state

export default function (state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        nameList: [...state.nameList, action.payload.name],};

    case 'CLEAR_LİST':
        return  {...state,nameList:[]} 

    case 'SET_USER':
       return {...state,user:action.payload.user}


    default:
      return state;
  }
}
