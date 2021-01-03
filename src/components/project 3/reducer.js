const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE':
      state = {
        ...state,
        list: state.list.filter(item => item.id !== action.payload)
      }
      break;
  }
}

export default reducer;